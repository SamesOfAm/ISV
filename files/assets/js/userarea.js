jQuery(document).ready(function(){

    // Funktionen

    const pullOutLegend = (id) => {
        const element = document.getElementById(id);
        const legend = element.querySelector('legend');
        const parent = element.parentElement;
        element.removeChild(legend);
        parent.insertBefore(legend, element);
    }

    const beautifyCheckboxes = (id) => {
        const tags = document.getElementById(id).querySelectorAll('span');
        for(let i = 0; i < tags.length; i++) {
            const radioOption = document.createElement('label');
            const textNode = document.createTextNode(tags[i].innerText);
            radioOption.appendChild(textNode);
            document.getElementById(id).parentElement.appendChild(radioOption);
            radioOption.addEventListener('click', function(){
                const allLabels = Array.from(document.getElementById(id).parentElement.children).filter(el=>el.tagName === 'LABEL');
                tags[i].firstChild.checked = !tags[i].firstChild.checked;
                if(tags[i].firstChild.checked){
                    allLabels[i].style.backgroundImage = 'url("files/assets/layout/selected.svg")';
                } else {
                    allLabels[i].style.backgroundImage = 'url("files/assets/layout/unselected.svg")';
                }
            });
            if(tags[i].firstChild.checked) {
                radioOption.style.backgroundImage = 'url("files/assets/layout/selected.svg")';
            }
        }
    }


    // Klarer formulierte Labels im Nutzerbereich, wo Foto und Logo gelöscht werden können

    if(document.getElementById('files_photo')){
        document.getElementById('files_photo').querySelector('label').innerHTML = "Foto löschen";
    }

    if(document.getElementById('files_logo')){
        document.getElementById('files_logo').querySelector('label').innerHTML = "Logo löschen";
    }

    // Anderen Text für Bilder-Uploads im Nutzerbereich anzeigen

    if(document.getElementById('dropzone_photo')){
        document.getElementById('dropzone_photo').querySelector('.dz-message').querySelector('span').innerHTML = 'Foto hochladen';
    }
    if(document.getElementById('dropzone_logo')){
        document.getElementById('dropzone_logo').querySelector('.dz-message').querySelector('span').innerHTML = 'Logo hochladen';
    }

    // Löschen von Foto und Logo nutzerfreundlicher machen, indem ein Klick auf das Label das Formular abschickt

    const allResetButtons = document.querySelectorAll('.file-reset');
    allResetButtons.forEach(button => button.children[0].addEventListener('click', function(){
        button.children[1].checked = true;
        if(document.getElementById('mm_store')){
            document.getElementById('mm_store').submit();
        } else if(document.getElementById('mm_restaurant')) {
            document.getElementById('mm_restaurant').submit();
        }
    }))

    if(document.querySelector('.edit-window')) {
        if(document.querySelector('.prop-logo').querySelector('.file-container') !== null) {
            document.querySelector('.prop-logo').querySelector('.tl_tbox').style.display = "none";
        }

        if(document.querySelector('.prop-photo').querySelector('.file-container') !== null) {
            document.querySelector('.prop-photo').querySelector('.tl_tbox').style.display = "none";
        }
    }

    // Checkboxen schön machen und ggf. Legende der Checkbox-Liste sichtbar machen

    if(document.getElementById('ctrl_tags')){
        beautifyCheckboxes('ctrl_tags');
    }

    if(document.getElementById('ctrl_assortment')){
        beautifyCheckboxes('ctrl_assortment');
    }

    if(document.getElementById('ctrl_extras')){
        beautifyCheckboxes('ctrl_extras');
    }

    if(document.getElementById('ctrl_category')){
        beautifyCheckboxes('ctrl_category');
        pullOutLegend('ctrl_category');
    }

    if(document.getElementById('mm_store') && document.getElementById('ctrl_type')){
        beautifyCheckboxes('ctrl_type');
    }


    // Abhängig von Kategorie-Auswahl (Restaurant bzw. Shopping) Unterkategorie-Auswahl anzeigen

    //Einmal für Gastronomie

    if(document.getElementById('mm_restaurant')) {
        let isRestaurant = document.getElementById('opt_category_0').checked;
        if(isRestaurant) {
            document.querySelector('.prop-assortment').style.display = "block";
        }
        Array.from(document.getElementById('mm_restaurant').querySelector('.prop-category').children).filter(el => el.tagName === 'LABEL')[0].addEventListener('click', function () {
            isRestaurant = !isRestaurant;
            if (isRestaurant) {
                document.querySelector('.prop-assortment').style.display = "block";
            } else {
                document.querySelector('.prop-assortment').style.display = "none";
            }
        })
    }

    // ... und einmal für Einzelhändler / Dienstleister

    if(document.getElementById('mm_store')) {
        let isShopping = document.getElementById('opt_category_0').checked;
        if(isShopping) {
            document.querySelector('.prop-type').style.display = "block";
        }
        Array.from(document.getElementById('mm_store').querySelector('.prop-category').children).filter(el => el.tagName === 'LABEL')[0].addEventListener('click', function () {
            isShopping = !isShopping;
            if (isShopping) {
                document.querySelector('.prop-type').style.display = "block";
            } else {
                document.querySelector('.prop-type').style.display = "none";
            }
        })
    }

    // Auswahl Öffnungszeiten zu Dropdowns machen

    if(document.querySelector('.widget.datepicker')) {
        let hours = [], j, k;
        for( j=0; j<24; j++) {
            for(k=0; k<2; k++) {
                hours.push((j.toString().length===1 ? "0" + j : j) + ":" + (k===0 ? "00" : 30*k) );
            }
        }
        const allPickers = document.querySelectorAll('.widget.datepicker');
        for(let i = 0; i < allPickers.length; i++) {
            const dropdown = document.createElement('select');

            for(let l = 0; l < hours.length; l++) {
                const option = document.createElement('option');
                option.value = hours[l];
                option.innerHTML = hours[l];
                dropdown.appendChild(option);
            }

            dropdown.addEventListener('change', function() {
                dropdown.parentElement.querySelector('input').value = dropdown.selectedOptions[0].value;
            });

            allPickers[i].appendChild(dropdown);
            dropdown.value = allPickers[i].querySelector('input').value;
        }
    }

});
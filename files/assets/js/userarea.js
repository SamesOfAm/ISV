jQuery(document).ready(function(){

    // Klarer formulierte Labels im Nutzerbereich, wo Foto und Logo gelöscht werden können

    if(document.getElementById('files_photo')){
        document.getElementById('files_photo').querySelector('label').innerHTML = "Foto löschen";
    }

    if(document.getElementById('files_logo')){
        document.getElementById('files_logo').querySelector('label').innerHTML = "Logo löschen";
    }

    // Screengröße herausfinden und entsprechenden Text für Bilder-Uploads im Nutzerbereich anzeigen

    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if(document.getElementById('dropzone_photo') && width >= 800){
        document.getElementById('dropzone_photo').querySelector('.dz-message').querySelector('span').innerHTML = 'Foto Ihres Geschäfts hierher ziehen oder hier klicken';
    } else if(document.getElementById('dropzone_photo') && width <= 800) {
        document.getElementById('dropzone_photo').querySelector('.dz-message').querySelector('span').innerHTML = 'Foto hochladen';
    }
    if(document.getElementById('dropzone_logo') && width >= 800){
        document.getElementById('dropzone_logo').querySelector('.dz-message').querySelector('span').innerHTML = 'Logo Ihres Geschäfts hierher ziehen oder hier klicken';
    } else if(document.getElementById('dropzone_logo') && width <= 800) {
        document.getElementById('dropzone_logo').querySelector('.dz-message').querySelector('span').innerHTML = 'Logo hochladen';
    }


    // Löschen von Foto und Logo nutzerfreundlicher machen, indem ein Klick auf das Label das Formular abschickt

    const allResetButtons = document.querySelectorAll('.file-reset');
    allResetButtons.forEach(button => button.children[0].addEventListener('click', function(){
        button.children[1].checked = true;
        console.log(button.children[1].checked);
        document.getElementById('mm_store').submit();
    }))

    if(document.querySelector('.edit-window')) {
        if(document.querySelector('.prop-logo').querySelector('.file-container') !== null) {
            document.querySelector('.prop-logo').querySelector('.tl_tbox').style.display = "none";
        }

        if(document.querySelector('.prop-photo').querySelector('.file-container') !== null) {
            document.querySelector('.prop-photo').querySelector('.tl_tbox').style.display = "none";
        }
    }

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
                const allOptions = Array.from(document.getElementById(id).parentElement.children).filter(el=>el.tagName === 'OPTION');
                tags[i].firstChild.checked = !tags[i].firstChild.checked;
                if(tags[i].firstChild.checked){
                    allLabels[i].style.backgroundImage = 'url("files/assets/layout/selected.svg")';
                    allOptions[i].style.backgroundImage = 'url("files/assets/layout/selected.svg")';
                } else {
                    allLabels[i].style.backgroundImage = 'url("files/assets/layout/unselected.svg")';
                    allOptions[i].style.backgroundImage = 'url("files/assets/layout/unselected.svg")';
                }
            });
            if(tags[i].firstChild.checked) {
                radioOption.style.backgroundImage = 'url("files/assets/layout/selected.svg")';
            }
        }
    }

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

    let isRestaurant = false;
    let isShopping = false;

    // Abhängig von Kategorie-Auswahl (Restaurant bzw. Shopping) Unterkategorie-Auswahl anzeigen

    if(document.getElementById('mm_restaurant')) {
        Array.from(document.getElementById('mm_restaurant').querySelector('.prop-category').children).filter(el => el.tagName === 'LABEL')[0].addEventListener('click', function () {
            isRestaurant = !isRestaurant;
            if (isRestaurant) {
                document.querySelector('.prop-assortment').style.display = "block";
            } else {
                document.querySelector('.prop-assortment').style.display = "none";
            }
        })
    }

    if(document.getElementById('mm_store')) {
        Array.from(document.getElementById('mm_store').querySelector('.prop-category').children).filter(el => el.tagName === 'LABEL')[0].addEventListener('click', function () {
            isShopping = !isShopping;
            if (isShopping) {
                document.querySelector('.prop-type').style.display = "block";
            } else {
                document.querySelector('.prop-type').style.display = "none";
            }
        })
    }

    /* if(document.querySelector('.widget.datepicker')) {
        let hours = [], j, k;
        for( j=0; j<24; j++) {
            for(k=0; k<2; k++) {
                hours.push(j + ":" + (k===0 ? "00" : 30*k) );
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
                console.log(dropdown.parentElement.querySelector('input').value);
            });


            allPickers[i].appendChild(dropdown);
            dropdown.value = allPickers[i].querySelector('input').value;




        }
    } */

});
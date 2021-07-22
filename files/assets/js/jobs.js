// Im Job-Formular die Labels bei Klick/Tippen aus dem Input-Feld herausfahren lassen

const textfields = document.querySelectorAll('.widget-text');
const textareas = document.querySelectorAll('.widget-textarea');
textfields.forEach(field => field.querySelector('input').addEventListener('focus', function(){field.children[0].style.top = "5px"}));
textareas.forEach(field => field.querySelector('textarea').addEventListener('focus', function(){field.children[0].style.top = "5px"}));


// Im Job-Formular das richtige "Ausgewählt-Icon" anzeigen, wenn eine Option ausgewählt wurde

if(document.querySelector('.job-filter-accordion')) {
    document.querySelector('.job-filter-accordion').querySelectorAll('.radio_container').forEach(container => container.addEventListener('click', function(){
        for(let i = 1; i < container.children.length; i++){
            if(container.children[i].firstChild.checked) {
                container.children[i].style.backgroundImage = "url('files/assets/layout/selected.svg')";
            } else {
                container.children[i].style.backgroundImage = "url('files/assets/layout/unselected.svg')";
            }
        }
    }));
}


// Im Job-Formular den Speichern-Button besser benennen

if(document.getElementById('save')) {
    document.getElementById('save').innerHTML = 'Absenden';
}


// Im Job-Formular das richtige "Ausgewählt-Icon" bei der Zustimmung zum Datenschutz anzeigen

if(document.getElementById('lbl_privacy_0')) {
    document.getElementById('lbl_privacy_0').addEventListener('click', function(){
        if(this.control.checked){
            this.style.backgroundImage = 'url("files/assets/layout/unselected.svg")';
        } else {
            this.style.backgroundImage = 'url("files/assets/layout/selected.svg")';
        }
    });
}


// Im Job-Formular für jede Option im unsichtbaren Dropdown eine Radio-Option erstellen und mit Click-Handler für richtige Darstellung der Icons versehen

// Einmal für "Vollzeit" und "Teilzeit"

if(window.location.pathname.indexOf("/jobboerse") !== -1){
    const timeOptions = document.getElementById('ctrl_time');
    for(let i = 1; i < timeOptions.length; i++) {
        const radioOption = document.createElement('label');
        const textNode = document.createTextNode(timeOptions[i].innerText);
        radioOption.appendChild(textNode);
        document.querySelector('.widget.time').appendChild(radioOption);
        radioOption.addEventListener('click', function(){
            const allLabels = document.querySelector('.widget.time').querySelectorAll('label');
            for(let j = 0; j < timeOptions.length-1; j++) {
                timeOptions[j].selected = false;
                allLabels[j].style.backgroundImage = 'url("files/assets/layout/unselected.svg")';
            }
            timeOptions[i].selected = true;
            allLabels[i-1].style.backgroundImage = 'url("files/assets/layout/selected.svg")';
        });
        if(timeOptions[i].selected) {
            radioOption.style.backgroundImage = 'url("files/assets/layout/selected.svg")';
        }
    }

    // Das gleiche für alle Arten von Anzeigen ("Ausbildung", "450-Euro-Basis", ...)

    const typeOptions = document.getElementById('ctrl_type');
    for(let i = 1; i < typeOptions.length; i++) {
        const radioOption = document.createElement('label');
        const textNode = document.createTextNode(typeOptions[i].innerText);
        radioOption.appendChild(textNode);
        document.querySelector('.widget.type').appendChild(radioOption);
        radioOption.addEventListener('click', function(){
            const allLabels = document.querySelector('.widget.type').querySelectorAll('label');
            for(let j = 0; j < typeOptions.length-1; j++){
                typeOptions[j].selected = false;
                allLabels[j].style.backgroundImage = 'url("files/assets/layout/unselected.svg")';
            }
            typeOptions[i].selected = true;
            allLabels[i-1].style.backgroundImage = 'url("files/assets/layout/selected.svg")';
        });
        if(typeOptions[i].selected) {
            radioOption.style.backgroundImage = 'url("files/assets/layout/selected.svg")';
        }
    }

    // Den "Filter aufheben"-Button ggfs. ausblenden und an die richtige Stelle rücken

    const filterClearAll = document.querySelector('.clearall');
    document.getElementById('job-article').removeChild(filterClearAll);
    document.querySelector('.job-filter-accordion').querySelector('.accordion').appendChild(filterClearAll);

    if(!document.querySelector('.used')) {
        document.querySelector('.clearall').querySelector('a').style.display = "none";
    }
}


// Auch bei Klick auf den Pfeil neben "Absenden" Form abschicken

if(document.getElementById('submit-arrow')) {
    document.getElementById('submit-arrow').addEventListener('click', function(){
        document.getElementById('job-filter-form').submit();
    })
}
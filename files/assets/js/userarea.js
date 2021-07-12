jQuery(document).ready(function(){

    // Klarer formulierte Labels im Nutzerbereich, wo Foto und Logo gelöscht werden können

    if(document.getElementById('files_photo')){
        document.getElementById('files_photo').querySelector('label').innerHTML = "Foto entfernen (wird nach Klick auf Speichern gelöscht)";
    }

    if(document.getElementById('files_logo')){
        document.getElementById('files_logo').querySelector('label').innerHTML = "Logo entfernen (wird nach Klick auf Speichern gelöscht)";
    }


    // Im Nutzerbereich das Eingabefeld für Sonderangebote, Rabatte, etc. aus dem Akkordeon herausholen, damit es schnell zu bearbeiten ist

    if(document.querySelector('.prop-special_offers')) {
        const field = document.querySelector('.prop-special_offers');
        const parent = document.getElementById('pal_legend1');
        const newParent = document.querySelector('.formbody_edit');
        parent.removeChild(field);
        newParent.appendChild(field);
    }


    // Screengröße herausfinden und entsprechenden Text anzeigen, wo im Nutzerbereich Dateien für Foto und Logo hochheladen werden können

    const ratio = window.devicePixelRatio || 1;
    const w = screen.width * ratio;
    const h = screen.height * ratio;
    if(document.getElementById('dropzone_photo') && w >= 800){
        document.getElementById('dropzone_photo').querySelector('.dz-message').querySelector('span').innerHTML = 'Foto Ihres Geschäfts hierher ziehen oder hier klicken';
    } else if(document.getElementById('dropzone_photo') && w <= 800) {
        document.getElementById('dropzone_photo').querySelector('.dz-message').querySelector('span').innerHTML = 'Hier tippen, um Foto Ihres Geschäfts hochzuladen';
    }
    if(document.getElementById('dropzone_logo') && w >= 800){
        document.getElementById('dropzone_logo').querySelector('.dz-message').querySelector('span').innerHTML = 'Logo Ihres Geschäfts hierher ziehen oder hier klicken';
    } else if(document.getElementById('dropzone_logo') && w <= 800) {
        document.getElementById('dropzone_logo').querySelector('.dz-message').querySelector('span').innerHTML = 'Hier tippen, um Logo Ihres Geschäfts hochzuladen';
    }
});
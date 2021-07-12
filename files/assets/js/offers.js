// Auf Seite für Sonderangebote & Rabatte nach Klick auf "Shopping" bzw. "Essen & Trinken" nur den dazugehörigen Filter anzeigen

const getSpanSiblings = (e) => {
    let allSiblings = [];
    let sibling = e.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e && sibling.tagName === "SPAN") {
            allSiblings.push(sibling);
        }
        sibling = sibling.nextSibling
    }
    return allSiblings;
};


if(document.getElementById('offer-filter')) {
    document.getElementById('store-type-filter').style.display = 'none';
    document.getElementById('restaurant-type-filter').style.display = 'none';
    const form = document.getElementById('offer-filter');
    const storeOption = form.querySelector('.offer-filter-checkboxes').firstElementChild.elements[0];
    const restaurantOption = form.querySelector('.offer-filter-checkboxes').firstElementChild.elements[1];
    storeOption.addEventListener('change', function(e){
        if(storeOption.checked) {
            document.getElementById('store-type-filter').style.display = 'block';
            document.getElementById('restaurant-type-filter').style.display = 'none';
            e.target.labels[0].style.backgroundImage = 'url("files/assets/layout/selected.svg")';
            const otherOptions = getSpanSiblings(e.target.parentElement);
            otherOptions[0].querySelector('label').style.backgroundImage = 'url("files/assets/layout/unselected.svg")';
        }
    });
    restaurantOption.addEventListener('change', function(e){
        if(restaurantOption.checked) {
            document.getElementById('restaurant-type-filter').style.display = 'block';
            document.getElementById('store-type-filter').style.display = 'none';
            e.target.labels[0].style.backgroundImage = 'url("files/assets/layout/selected.svg")';
            const otherOptions = getSpanSiblings(e.target.parentElement);
            otherOptions[0].querySelector('label').style.backgroundImage = 'url("files/assets/layout/unselected.svg")';
        }
    });

    if(!document.querySelector('.used')) {
        document.querySelector('.clearall').style.display = "none";
    }


    if(window.location.pathname.indexOf('cuisine') > window.location.pathname.indexOf('type')) {
        document.getElementById('store-offers').style.display = 'none';
        document.getElementById('restaurant-type-filter').style.display = "block";
        document.getElementById('opt_3_1').checked = 'true';
        document.getElementById('lbl_3_1').style.backgroundImage = 'url("files/assets/layout/selected.svg")';
    } else if(window.location.pathname.indexOf('type') > window.location.pathname.indexOf('cuisine')) {
        document.getElementById('restaurant-offers').style.display = 'none';
        document.getElementById('store-type-filter').style.display = "block";
        document.getElementById('opt_3_0').checked = 'true';
        document.getElementById('lbl_3_0').style.backgroundImage = 'url("files/assets/layout/selected.svg")';
    }

    function checkboxToRadio(fieldsetId) {
        const options = document.getElementById(fieldsetId).querySelectorAll('label');
        options.forEach(function(option){
            option.addEventListener('click', function(){
                if(option.previousElementSibling.checked){
                    option.style.backgroundImage = 'url("files/assets/layout/unselected.svg")';
                } else {
                    option.style.backgroundImage = 'url("files/assets/layout/selected.svg")';
                }
            });
            if(option.previousElementSibling.checked) {
                option.style.backgroundImage = 'url("files/assets/layout/selected.svg")';
            }
        });
    }

    checkboxToRadio('ctrl_type');
    checkboxToRadio('ctrl_cuisine');
}


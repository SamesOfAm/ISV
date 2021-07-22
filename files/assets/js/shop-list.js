const shopTypeOptions = document.getElementById('ctrl_type').children;
const shopTagOptions = document.getElementById('ctrl_tags').children;
for(let i = 1; i < shopTypeOptions.length; i++) {
    const radioOption = document.createElement('label');
    const textNode = document.createTextNode(shopTypeOptions[i].innerText);
    radioOption.appendChild(textNode);
    document.querySelector('.widget.type').appendChild(radioOption);
    radioOption.addEventListener('click', function(){
        const allLabels = jQuery('.widget.type').children('label');
        shopTypeOptions[i].firstChild.checked = !shopTypeOptions[i].firstChild.checked;
        if(shopTypeOptions[i].firstChild.checked){
            allLabels[i-1].style.backgroundImage = 'url("files/assets/layout/selected.svg")';
        } else {
            allLabels[i-1].style.backgroundImage = 'url("files/assets/layout/unselected.svg")';
        }
    });
    if(shopTypeOptions[i].firstChild.checked) {
        radioOption.style.backgroundImage = 'url("files/assets/layout/selected.svg")';
    }
}

for(let i = 0; i < shopTagOptions.length; i++) {
    const radioOption = document.createElement('label');
    const textNode = document.createTextNode(shopTagOptions[i].innerText);
    radioOption.appendChild(textNode);
    document.querySelector('.widget.tags').appendChild(radioOption);
    radioOption.addEventListener('click', function(){
        const allLabels = jQuery('.widget.tags').children('label');
        shopTagOptions[i].firstChild.checked = !shopTagOptions[i].firstChild.checked;
        if(shopTagOptions[i].firstChild.checked){
            allLabels[i].style.backgroundImage = 'url("files/assets/layout/selected.svg")';
        } else {
            allLabels[i].style.backgroundImage = 'url("files/assets/layout/unselected.svg")';
        }
    });
    if(shopTagOptions[i].firstChild.checked) {
        radioOption.style.backgroundImage = 'url("files/assets/layout/selected.svg")';
    }
}

const filterClearAll = document.querySelector('.clearall');
document.getElementById('shop-list-article').removeChild(filterClearAll);
document.querySelector('.shop-list-filter').querySelector('.formbody').appendChild(filterClearAll);

if(!document.querySelector('.used')) {
    document.querySelector('.clearall').style.display = "none";
}


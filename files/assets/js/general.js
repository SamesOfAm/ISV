/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://weimar.app/service-worker.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
    })
}


document.getElementById('set-contrast').addEventListener('click', function (e) {
    e.preventDefault();
    if(document.body.classList.contains('high-contrast')) {
        document.body.classList.remove('high-contrast');
        document.cookie = "contrast=high;SameSite=Lax;Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    } else {
        document.body.classList.add('high-contrast');
        document.cookie = "contrast=high;SameSite=Lax";
    }
});

function getCookie(name) {
    const dc = document.cookie;
    let end = dc.length;
    const prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    if (begin === -1) {
        begin = dc.indexOf(prefix);
        if (begin !== 0) return null;
    } else {
        begin += 2;
        end = document.cookie.indexOf(";", begin);
        if (end === -1) {
            end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}

const myCookie = getCookie("contrast");

if (myCookie !== null) {
    document.body.classList.add('high-contrast');
}

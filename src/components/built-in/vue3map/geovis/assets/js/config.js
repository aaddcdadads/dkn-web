const defaultUrl = 'http://icenter.geovis.online'
const isDefault = true;

function getOriginUrl () {
    const tempUrl = window.location.origin.split(':');
    return `${tempUrl[0]}:${tempUrl[1]}${tempUrl[2]!==undefined ? ':' : ''}`
}

window.getBaseUrl = function() {
    if(isDefault) {
        return defaultUrl;
    } else {
        return `${getOriginUrl()}${port}`
    }
}
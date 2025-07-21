'use strict';

function main() {
    document.addEventListener('DOMContentLoaded', () => {
        let positionPromise = getPosition();
        positionPromise
        .then(showPosition)
        .catch(noGeo);
    });
}

function getPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};

function showPosition(position) {
    console.log(position.coords);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let locationLink = document.querySelector('#location');
    locationLink.href = `https://www.google.com/maps/@${lat},${lon},15z`;
    locationLink.textContent = 'View Location';
}

function noGeo(e) {
    console.log(e);
}
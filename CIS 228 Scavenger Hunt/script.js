'use strict';
let map;
let locations = [];
let currentIndex = 0;
let centerMarker = L.marker([39.9526, -75.1652]); // Philadelphia coordinates
let lastKnownPosition = null; // Store the last known position

function distance(lat1, lon1, lat2, lon2) {
  const r = 6378.137;
  lat1 *= Math.PI / 180;
  lat2 *= Math.PI / 180;
  lon1 *= Math.PI / 180;
  lon2 *= Math.PI / 180;
  let h = Math.pow(Math.sin((lat2 - lat1) / 2), 2) + (Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin((lon2 - lon1) / 2), 2));
  return 2 * r * Math.asin(Math.sqrt(h))* 1000; // Return distance in meters
}


document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('currentLocationIndex')) {
            currentIndex = parseInt(localStorage.getItem('currentLocationIndex'));
        }

        map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        centerMarker.addTo(map);
        
        fetch('locations.json')
        .then(res => res.json())
        .then(data => {
            if (!data.locations || !Array.isArray(data.locations)) {
                throw new Error('Invalid locations data');
            }
            locations = data.locations;
            navigator.geolocation.watchPosition(showPosition, noGeo);
    })
    .catch(e => {
        console.error('Failed to load locations.json:', e);})
});


function showPosition(position) {
    lastKnownPosition = position; // Store the last known position
    if (currentIndex >= locations.length) return;
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const current = locations[currentIndex];
    map.panTo([lat, lon]);
    centerMarker.setLatLng([lat, lon]);

    const dist = distance(lat, lon, current.lat, current.lon);
    console.log(`Distance to ${current.name}: ${dist.toFixed(2)} meters`);

    const distanceDisplay = document.getElementById('distanceDisplay');
    if (distanceDisplay) {
        distanceDisplay.innerHTML = `Distance to ${current.clue}: ${dist.toFixed(2)} meters`;
    }

    if (dist <= 10) {
        showClue(current);
    }
}

function noGeo(e) {
    console.error('Geolocation error:', e);
}

// Load from localStorage or initialize
if (localStorage.getItem('currentLocationIndex')) {
    currentIndex = parseInt(localStorage.getItem('currentLocationIndex'));
}


function showClue(location) {
    //display the clue for the current location + image
    document.getElementById('clueBox').innerHTML = `
    <h2>${location.name}</h2>
    <p>${location.clue}</p>
    <img src="${location.image}" alt="${location.name}"/><button onclick="nextClue()">Next Clue</button>`;

}

function nextClue() {
    currentIndex++;
    localStorage.setItem('currentLocationIndex', currentIndex);

    if (currentIndex >= locations.length) {
        document.getElementById('clueBox').innerHTML = '<h2>Congratulations! You have completed the scavenger hunt! refresh to play again!</h2>';
    } else if (lastKnownPosition) {
        const nextLocation = locations[currentIndex];
        showPosition(lastKnownPosition);
        showClue(nextLocation);
    }
}

function resetGame() {
    localStorage.removeItem('currentLocationIndex');
    location.reload(); // Reload the page to reset the game
}

window.nextClue = nextClue;
window.resetGame = resetGame;
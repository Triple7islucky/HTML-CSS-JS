import {FoodItem, Menu} from './classes.js';

const menuItemsContainer = document.getElementById('menuItems');
const typeFilter = document.getElementById('typeFilter');
const veganFilter = document.getElementById('veganFilter');
const spicyFilter = document.getElementById('spicyFilter');

let menu = new Menu();

function loadMenu(){
    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        menu.loadItems(data)
        renderMenu();
    })
    .catch(error => console.error('Error loading the menu: ', error));
}

function renderMenu(){
    const type = typeFilter.value;
    const vegan = veganFilter.checked;
    const spicy = spicyFilter.checked;

    menu.render(menuItemsContainer, type, vegan, spicy)
    }

window.addEventListener('DOMContentLoaded', () =>{
    loadMenu();

    typeFilter.addEventListener('change', renderMenu),
    veganFilter.addEventListener('change', renderMenu),
    spicyFilter.addEventListener('change', renderMenu)
});
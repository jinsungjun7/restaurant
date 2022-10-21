import framework from './framework.js';
import './styles.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import {Map} from './map.js';

function component() {  
    framework().forEach(section => content.appendChild(section));
    return content;
}

function addHome() {
    body.innerHTML = '';
    home().forEach(section => body.appendChild(section));
    setTab();
    return body;
}

function addMenu() {
    body.innerHTML = '';
    menu().forEach(section => body.appendChild(section));
    return body;
}

function addContact() {
    body.innerHTML = '';
    body.appendChild(newMap);
    Map.loadGoogleMapsApi().then(function(googleMaps) {
      Map.createMap(googleMaps, newMap);
    });
    contact().forEach(section => body.appendChild(section));
    return body;
}

function setTab() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.addEventListener('click', (e) => {
        if (tab.getAttribute('id') == 'home') {
            content.appendChild(addHome());
            toggleBody('home');
            toggleMenuBar('home');
        } else if (tab.getAttribute('id') == 'menu') {
            content.appendChild(addMenu());
            toggleBody('menu');
            toggleMenuBar('menu');
        } else if (tab.getAttribute('id') == 'contact') {
            content.appendChild(addContact());
            toggleBody('contact');
            toggleMenuBar('contact');
        };
    }));
}

function toggleBody(id) {
    body.setAttribute('id', id);
}

function toggleMenuBar(id) {
    menuBar.setAttribute('id', id);
}
  
// default first load of page
const content = document.createElement('div');
content.setAttribute('id','content');
document.body.appendChild(component());
const body = document.querySelector('.body');
content.appendChild(addHome());
const menuBar = document.querySelector('.menuBar');
setTab();

const newMap = document.createElement('div');
newMap.classList.add('map');
newMap.textContent = 'Google Maps';

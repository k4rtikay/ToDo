import './styles.css';
import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import { loadAdopt } from './adopt.js';
import { loadContact } from './contact.js';

loadHome();

document.getElementById('Menu').addEventListener('click',()=>{
    loadMenu();
})

document.getElementById('Adopt').addEventListener('click',()=>{
    loadAdopt();
})

document.getElementById('Contact').addEventListener('click',()=>{
    loadContact();
})

document.getElementById('Home').addEventListener('click',()=>{
    loadHome();
})

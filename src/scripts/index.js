import { makePage } from './utils.js';
import { Keyboard } from './keyboard.js';

// let lang = window.localStorage.getItem("lang")
// ? window.localStorage.getItem("lang")
// : window.localStorage.setItem("lang", 'en');

const lang = 'ru';

const keyboard = new Keyboard(lang);

window.addEventListener('DOMContentLoaded', () => {
  makePage(keyboard);
});

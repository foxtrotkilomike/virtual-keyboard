import { createElement, makePage } from './utils.js'
import { Keyboard, keys } from "./keyboard.js";

let lang = window.localStorage.getItem("lang") ? window.localStorage.getItem("lang") : window.localStorage.setItem("lang", 'en');

const keyboard = new Keyboard(null, lang);

window.addEventListener('DOMContentLoaded', (event) => {
  makePage(keyboard, keys);
});

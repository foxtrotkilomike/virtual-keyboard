import { makePage } from './utils.js';
import { Keyboard } from './keyboard.js';

// let lang = window.localStorage.getItem("lang")
// ? window.localStorage.getItem("lang")
// : window.localStorage.setItem("lang", 'en');

const lang = 'en';

const keyboard = new Keyboard(lang);

window.addEventListener('DOMContentLoaded', () => {
  makePage(keyboard);
});

// highlight keys on virtual keyboard
document.addEventListener('keydown', (evt) => {
  if (keyboard.keys[`${evt.code}`]) {
    keyboard.keys[`${evt.code}`].element.classList.add('keyboard__key--highlight');
  }
});

document.addEventListener('keyup', (evt) => {
  if (keyboard.keys[`${evt.code}`]) {
    keyboard.keys[`${evt.code}`].element.classList.remove('keyboard__key--highlight');
  }
});

// handle CapsLock
document.addEventListener('keydown', (evt) => {
  if (evt.code === 'CapsLock') {
    keyboard.keys.CapsLock.element.classList.toggle('keyboard__key--toggled');

    Object.keys(keyboard.keys).forEach((key) => {
      if (key.match(/^Key/)) {
        if (!keyboard.keys[key].shifted) {
          keyboard.keys[key].shifted = true;
          keyboard.keys[key].element.textContent = keyboard.keys[key].shiftedValue[lang];
        } else {
          keyboard.keys[key].shifted = false;
          keyboard.keys[key].element.textContent = keyboard.keys[key].value[lang];
        }
      }
    });
  }
});

// handle Shift
document.addEventListener('keydown', (evt) => {
  if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
    Object.keys(keyboard.keys).forEach((key) => {
      if (keyboard.keys[key].element.classList.contains('keyboard__key--standard')) {
        keyboard.keys[key].element.textContent = keyboard.keys[key].shiftedValue[lang];
      }
    });
  }
});

document.addEventListener('keyup', (evt) => {
  if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
    Object.keys(keyboard.keys).forEach((key) => {
      if (keyboard.keys[key].element.classList.contains('keyboard__key--standard')) {
        keyboard.keys[key].element.textContent = keyboard.keys[key].value[lang];
      }
    });
  }
});

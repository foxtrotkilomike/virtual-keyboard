import { makePage, changeKeyboardLayout } from './utils.js';
import { Keyboard } from './keyboard.js';
import '../styles/style.scss';

const language = window.localStorage.getItem('lang')
  ? window.localStorage.getItem('lang')
  : window.localStorage.setItem('lang', 'ru');

const keyboard = new Keyboard(language);
let resetButtonElem;
let textareaElem;
const keysPressed = {};

function shiftUnshift(kbd, kbdKey) {
  const keyBoard = kbd;
  const key = kbdKey;
  const { lang } = keyBoard;

  keyBoard.keys[key].shifted = keyBoard.keys[key].shifted !== true;

  if (keyBoard.keys[key].shifted) {
    keyBoard.keys[key].element.textContent = keyBoard.keys[key][lang].shiftedValue;
  } else {
    keyBoard.keys[key].element.textContent = keyBoard.keys[key][lang].value;
  }
}

function insertValue(textareaElm, insertedElm) {
  const textarea = textareaElm;
  const inserted = insertedElm;
  const substringBefore = textarea.value.slice(0, textarea.selectionStart);
  const substringAfter = textarea.value.slice(textarea.selectionStart);
  textarea.value = substringBefore + inserted + substringAfter;
  textarea.selectionEnd -= substringAfter.length;
}

function addListenersRealKeys(textareaElm) {
  const textarea = textareaElm;

  document.addEventListener('keydown', (evt) => {
    // highlight keys on virtual keyboard
    if (keyboard.keys[`${evt.code}`]) {
      textarea.focus();
      keyboard.keys[`${evt.code}`].element.classList.add('keyboard__key--highlight');
    }

    // handle Tab
    if (evt.code === 'Tab') {
      evt.preventDefault();
      textarea.focus();
      textarea.value += '\t';
    }

    // handle CapsLock
    if (evt.code === 'CapsLock') {
      if (!evt.repeat) {
        keyboard.keys.CapsLock.element.classList.toggle('keyboard__key--toggled');
        const { lang } = keyboard;

        Object.keys(keyboard.keys).forEach((key) => {
          if (keyboard.keys[key][lang].isLetter) {
            shiftUnshift(keyboard, key);
          }
        });
      }
    }

    // handle Shift
    if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
      if (!evt.repeat) {
        Object.keys(keyboard.keys).forEach((key) => {
          if (keyboard.keys[key].element.classList.contains('keyboard__key--standard')) {
            shiftUnshift(keyboard, key);
          }
        });
      }
    }

    // handle layout change
    keysPressed[`${evt.code}`] = true;
    if ((keysPressed.ShiftLeft || keysPressed.ShiftRight)
        && (keysPressed.AltLeft || keysPressed.AltRight)) {
      keyboard.lang = (keyboard.lang === 'en') ? 'ru' : 'en';
      window.localStorage.setItem('lang', keyboard.lang);
      changeKeyboardLayout(keyboard);
    }
  });

  document.addEventListener('keyup', (evt) => {
    // highlight keys on virtual keyboard
    if (keyboard.keys[`${evt.code}`]) {
      keyboard.keys[`${evt.code}`].element.classList.remove('keyboard__key--highlight');
    }

    // handle Shift
    if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
      Object.keys(keyboard.keys).forEach((key) => {
        if (keyboard.keys[key].element.classList.contains('keyboard__key--standard')) {
          shiftUnshift(keyboard, key);
        }
      });
    }

    keysPressed[`${evt.code}`] = false;
  });
}

function addListenersVirtualKeys(resetButtonEl, textareaEl) {
  const textarea = textareaEl;
  const resetButton = resetButtonEl;

  Object.keys(keyboard.keys).forEach((key) => {
    let callback;

    switch (key) {
      case 'Backspace':
        callback = () => {
          textarea.focus();
          const substringBefore = textarea.value.slice(0, textarea.selectionStart - 1);
          const substringAfter = textarea.value.slice(textarea.selectionStart);
          textarea.value = substringBefore.concat(substringAfter);
          textarea.selectionEnd -= substringAfter.length;
        };
        break;

      case 'Tab':
        callback = (evt) => {
          evt.preventDefault();
          textarea.focus();
          insertValue(textarea, '\t');
        };
        break;

      case 'Delete':
        callback = () => {
          textarea.focus();
          const substringBefore = textarea.value.slice(0, textarea.selectionStart);
          const substringAfter = textarea.value.slice(textarea.selectionStart + 1);
          textarea.value = substringBefore.concat(substringAfter);
          textarea.selectionEnd -= substringAfter.length;
        };
        break;

      case 'CapsLock':
        callback = () => {
          keyboard.keys.CapsLock.element.classList.toggle('keyboard__key--toggled');
          const { lang } = keyboard;

          Object.keys(keyboard.keys).forEach((keyName) => {
            if (keyboard.keys[keyName][lang].isLetter) {
              shiftUnshift(keyboard, keyName);
            }
          });
        };
        break;

      case 'Enter':
        callback = () => {
          textarea.focus();
          insertValue(textarea, '\n');
        };
        break;

      case 'ShiftLeft':
      case 'ShiftRight':
        keyboard.keys[key].element.addEventListener('mousedown', () => {
          Object.keys(keyboard.keys).forEach((keyName) => {
            if (keyboard.keys[keyName].element.classList.contains('keyboard__key--standard')) {
              shiftUnshift(keyboard, keyName);
            }
          });
        });

        keyboard.keys[key].element.addEventListener('mouseup', () => {
          Object.keys(keyboard.keys).forEach((keyName) => {
            if (keyboard.keys[keyName].element.classList.contains('keyboard__key--standard')) {
              shiftUnshift(keyboard, keyName);
            }
          });
        });
        break;

      case 'Win':
        callback = () => {
          textarea.focus();
          insertValue(textarea, 'Congrats, you won!:)');
        };
        break;

      case 'Space':
        callback = () => {
          textarea.focus();
          insertValue(textarea, ' ');
        };
        break;

      case 'ArrowUp':
        callback = () => {
          textarea.focus();
          textarea.selectionEnd -= textarea.textLength;
        };
        break;

      case 'ArrowDown':
        callback = () => {
          textarea.focus();
          textarea.selectionStart += textarea.textLength;
        };
        break;

      case 'ArrowRight':
        callback = () => {
          textarea.focus();
          textarea.selectionStart += 1;
        };
        break;

      case 'ArrowLeft':
        callback = () => {
          textarea.focus();
          textarea.selectionEnd -= 1;
        };
        break;

      default:
        if (keyboard.keys[key].element.classList.contains('keyboard__key--standard')) {
          callback = () => {
            textarea.focus();
            if (keyboard.keys[key].shifted) {
              insertValue(textarea, keyboard.keys[key][keyboard.lang].shiftedValue);
            } else {
              insertValue(textarea, keyboard.keys[key][keyboard.lang].value);
            }
          };
        }
    }

    if (callback) {
      keyboard.keys[key].element.addEventListener('click', (evt) => { callback(evt); });
    }
  });

  resetButton.addEventListener('click', () => {
    textarea.value = '';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  makePage(keyboard);
  resetButtonElem = document.querySelector('.button__reset');
  textareaElem = document.querySelector('#textarea');

  addListenersVirtualKeys(resetButtonElem, textareaElem);
  addListenersRealKeys(textareaElem);
});

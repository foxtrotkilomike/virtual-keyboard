import { createElement } from './utils.js'

export {
  Keyboard,
  Key,
  keys
}

class Keyboard {
  constructor (rows, lang) {
    this.rows = rows;
    this.lang = lang;
  }
}

function Key(keyObj) {
  const classList = ['keyboard__key'];
  if (keyObj.label) {
    classList.push('keyboard__key--special');
  }

  switch (keyObj.code) {
    case 'Backspace':
      classList.push('keyboard__key--backspace');
      break;

    case 'Tab':
    case 'CapsLock':
    case 'Win':
      classList.push('keyboard__key--tab');
      break;

    case 'Delete':
      classList.push('keyboard__key--del');
      break;

    case 'Enter':
      classList.push('keyboard__key--enter');
      break;

    case 'ShiftLeft':
      classList.push('keyboard__key--shift');
      break;

    case 'ShiftRight':
      classList.push('keyboard__key--shift', 'keyboard__key--shift-right');
      break;

    case 'CtrlLeft':
    case 'CtrlRight':
      classList.push('keyboard__key--ctrl');
      break;

    case 'AltLeft':
    case 'AltRight':
      classList.push('keyboard__key--alt');
      break;

    case 'Space':
      classList.push('keyboard__key--space');
      break;

    case 'ArrowUp':
    case 'ArrowDown':
    case 'ArrowRight':
    case 'ArrowLeft':
      classList.push('keyboard__key--arr');
      break;

    default:
      classList.push('keyboard__key--standard');
  }

  const key = createElement('button', classList);
  return key;
}

const keys = [
  [
    {
      value: {
        en: '`',
        ru: 'ё',
      },
      code: "Backquote",
      shiftedValue: {
        en: '~',
        ru: 'Ё',
      },
    },
    {
      value: {
        en: '1',
        ru: '1',
      },
      code: "Digit1",
      shiftedValue: {
        en: '!',
        ru: '!',
      },
    },
    {
      value: {
        en: '2',
        ru: '2',
      },
      code: "Digit2",
      shiftedValue: {
        en: '@',
        ru: '"',
      },
    },
    {
      value: {
        en: '3',
        ru: '3',
      },
      code: "Digit3",
      shiftedValue: {
        en: '#',
        ru: '№',
      },
    },
    {
      value: {
        en: '4',
        ru: '4',
      },
      code: "Digit4",
      shiftedValue: {
        en: '$',
        ru: ';',
      },
    },
    {
      value: {
        en: '5',
        ru: '5',
      },
      code: "Digit5",
      shiftedValue: {
        en: '%',
        ru: '%',
      },
    },
    {
      value: {
        en: '6',
        ru: '6',
      },
      code: "Digit6",
      shiftedValue: {
        en: '^',
        ru: ':',
      },
    },
    {
      value: {
        en: '7',
        ru: '7',
      },
      code: "Digit7",
      shiftedValue: {
        en: '&',
        ru: '?',
      },
    },
    {
      value: {
        en: '8',
        ru: '8',
      },
      code: "Digit8",
      shiftedValue: {
        en: '*',
        ru: '*',
      },
    },
    {
      value: {
        en: '9',
        ru: '9',
      },
      code: "Digit9",
      shiftedValue: {
        en: '(',
        ru: '(',
      },
    },
    {
      value:   {
        en: '0',
        ru: '0',
      },
      code: "Digit0",
      shiftedValue: {
        en: ')',
        ru: ')',
      },
    },
    {
      value: {
        en: '-',
        ru: '-',
      },
      code: "Minus",
      shiftedValue: {
        en: '_',
        ru: '_',
      },
    },
    {
      value: {
        en: '=',
        ru: '=',
      },
      code: "Equal",
      shiftedValue: {
        en: '+',
        ru: '+',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: "Backspace",
      code: "Backspace",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
  ],
  [
    {
      value: {
        en: '\t',
        ru: '\t',
      },
      label: "Tab",
      code: "Tab",
      shiftedValue: {
        en: '\t',
        ru: '\t',
      },
    },
    {
      value: {
        en: 'q',
        ru: 'й',
      },
      code: "KeyQ",
      shiftedValue: {
        en: 'Q',
        ru: 'Й',
      },
    },
    {
      value: {
        en: 'w',
        ru: 'ц',
      },
      code: "KeyW",
      shiftedValue: {
        en: 'W',
        ru: 'Ц',
      },
    },
    {
      value: {
        en: 'e',
        ru: 'у',
      },
      code: "KeyE",
      shiftedValue: {
        en: 'E',
        ru: 'У',
      },
    },
    {
      value: {
        en: 'r',
        ru: 'к',
      },
      code: "KeyR",
      shiftedValue: {
        en: 'R',
        ru: 'К',
      },
    },
    {
      value: {
        en: 't',
        ru: 'е',
      },
      code: "KeyT",
      shiftedValue: {
        en: 'T',
        ru: 'Е',
      },
    },
    {
      value: {
        en: 'y',
        ru: 'н',
      },
      code: "KeyY",
      shiftedValue: {
        en: 'Y',
        ru: 'Н',
      },
    },
    {
      value: {
        en: 'u',
        ru: 'г',
      },
      code: "KeyU",
      shiftedValue: {
        en: 'U',
        ru: 'Г',
      },
    },
    {
      value: {
        en: 'i',
        ru: 'ш',
      },
      code: "KeyI",
      shiftedValue: {
        en: 'I',
        ru: 'Ш',
      },
    },
    {
      value: {
        en: 'o',
        ru: 'щ',
      },
      code: "KeyO",
      shiftedValue: {
        en: 'O',
        ru: 'Щ',
      },
    },
    {
      value: {
        en: 'p',
        ru: 'з',
      },
      code: "KeyP",
      shiftedValue: {
        en: 'P',
        ru: 'З',
      },
    },
    {
      value: {
        en: '[',
        ru: 'х',
      },
      code: "BracketLeft",
      shiftedValue: {
        en: '{',
        ru: 'Х',
      },
    },
    {
      value: {
        en: ']',
        ru: 'ъ',
      },
      code: "BracketRight",
      shiftedValue: {
        en: '}',
        ru: 'Ъ',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: "Delete",
      code: "Delete",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
  ],
  [
    {
      value: {
        en: '',
        ru: '',
      },
      label: "CapsLock",
      code: "CapsLock",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    {
      value: {
        en: 'a',
        ru: 'ф',
      },
      code: "KeyA",
      shiftedValue: {
        en: 'A',
        ru: 'Ф',
      },
    },
    {
      value: {
        en: 's',
        ru: 'ы',
      },
      code: "KeyS",
      shiftedValue: {
        en: 'S',
        ru: 'Ы',
      },
    },
    {
      value: {
        en: 'd',
        ru: 'в',
      },
      code: "KeyD",
      shiftedValue: {
        en: 'D',
        ru: 'В',
      },
    },
    {
      value: {
        en: 'f',
        ru: 'а',
      },
      code: "KeyF",
      shiftedValue: {
        en: 'F',
        ru: 'А',
      },
    },
    {
      value: {
        en: 'g',
        ru: 'п',
      },
      code: "KeyG",
      shiftedValue: {
        en: 'G',
        ru: 'П',
      },
    },
    {
      value: {
        en: 'h',
        ru: 'р',
      },
      code: "KeyH",
      shiftedValue: {
        en: 'H',
        ru: 'Р',
      },
    },
    {
      value: {
        en: 'j',
        ru: 'о',
      },
      code: "KeyJ",
      shiftedValue: {
        en: 'J',
        ru: 'О',
      },
    },
    {
      value: {
        en: 'k',
        ru: 'л',
      },
      code: "KeyK",
      shiftedValue: {
        en: 'K',
        ru: 'Л',
      },
    },
    {
      value: {
        en: 'l',
        ru: 'д',
      },
      code: "KeyL",
      shiftedValue: {
        en: 'L',
        ru: 'Д',
      },
    },
    {
      value: {
        en: ';',
        ru: 'ж',
      },
      code: "Semicolon",
      shiftedValue: {
        en: ':',
        ru: 'Ж',
      },
    },
    {
      value: {
        en: "'",
        ru: 'э',
      },
      code: "Quote",
      shiftedValue: {
        en: '"',
        ru: 'Э',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: "Enter",
      code: "Enter",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
  ],
  [
    {
      value: {
        en: '',
        ru: '',
      },
      label: "Shift",
      code: "ShiftLeft",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    {
      value: {
        en: 'z',
        ru: 'я',
      },
      code: "KeyZ",
      shiftedValue: {
        en: 'Z',
        ru: 'Я',
      },
    },
    {
      value: {
        en: 'x',
        ru: 'ч',
      },
      code: "KeyX",
      shiftedValue: {
        en: 'X',
        ru: 'Ч',
      },
    },
    {
      value: {
        en: 'c',
        ru: 'с',
      },
      code: "KeyC",
      shiftedValue: {
        en: 'C',
        ru: 'С',
      },
    },
    {
      value: {
        en: 'v',
        ru: 'м',
      },
      code: "KeyV",
      shiftedValue: {
        en: 'V',
        ru: 'М',
      },
    },
    {
      value: {
        en: 'b',
        ru: 'и',
      },
      code: "KeyB",
      shiftedValue: {
        en: 'B',
        ru: 'И',
      },
    },
    {
      value: {
        en: 'n',
        ru: 'т',
      },
      code: "KeyN",
      shiftedValue: {
        en: 'N',
        ru: 'Т',
      },
    },
    {
      value: {
        en: 'm',
        ru: 'ь',
      },
      code: "KeyM",
      shiftedValue: {
        en: 'M',
        ru: 'Ь',
      },
    },
    {
      value: {
        en: ',',
        ru: 'б',
      },
      code: "Comma",
      shiftedValue: {
        en: '<',
        ru: 'Б',
      },
    },
    {
      value: {
        en: '.',
        ru: 'ю',
      },
      code: "Period",
      shiftedValue: {
        en: '>',
        ru: 'Ю',
      },
    },
    {
      value: {
        en: '/',
        ru: '.',
      },
      code: "Slash",
      shiftedValue: {
        en: '?',
        ru: ',',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: '↑',
      code: "ArrowUp",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: 'Shift',
      code: "ShiftRight",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
  ],
  [
    {
      value: {
        en: '',
        ru: '',
      },
      label: 'Ctrl',
      code: "ControlLeft",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: 'Win',
      code: "Win",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: 'Alt',
      code: "AltLeft",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: '-',
      code: "Space",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: 'Alt',
      code: "AltRight",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: 'Ctrl',
      code: "ControlRight",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: '←',
      code: "ArrowLeft",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: '↓',
      code: "ArrowDown",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    {
      value: {
        en: '',
        ru: '',
      },
      label: '→',
      code: "ArrowRight",
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
  ]
]

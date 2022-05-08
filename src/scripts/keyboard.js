export class Keyboard {
  constructor(lang) {
    this.lang = lang;
  }

  keys = {
    Backquote: {
      row: 1,
      value: {
        en: '`',
        ru: 'ё',
      },
      shiftedValue: {
        en: '~',
        ru: 'Ё',
      },
    },
    Digit1: {
      row: 1,
      value: {
        en: '1',
        ru: '1',
      },
      shiftedValue: {
        en: '!',
        ru: '!',
      },
    },
    Digit2: {
      row: 1,
      value: {
        en: '2',
        ru: '2',
      },
      shiftedValue: {
        en: '@',
        ru: '"',
      },
    },
    Digit3: {
      row: 1,
      value: {
        en: '3',
        ru: '3',
      },
      shiftedValue: {
        en: '#',
        ru: '№',
      },
    },
    Digit4: {
      row: 1,
      value: {
        en: '4',
        ru: '4',
      },
      shiftedValue: {
        en: '$',
        ru: ';',
      },
    },
    Digit5: {
      row: 1,
      value: {
        en: '5',
        ru: '5',
      },
      shiftedValue: {
        en: '%',
        ru: '%',
      },
    },
    Digit6: {
      row: 1,
      value: {
        en: '6',
        ru: '6',
      },
      shiftedValue: {
        en: '^',
        ru: ':',
      },
    },
    Digit7: {
      row: 1,
      value: {
        en: '7',
        ru: '7',
      },
      shiftedValue: {
        en: '&',
        ru: '?',
      },
    },
    Digit8: {
      row: 1,
      value: {
        en: '8',
        ru: '8',
      },
      shiftedValue: {
        en: '*',
        ru: '*',
      },
    },
    Digit9: {
      row: 1,
      value: {
        en: '9',
        ru: '9',
      },
      shiftedValue: {
        en: '(',
        ru: '(',
      },
    },
    Digit0: {
      row: 1,
      value: {
        en: '0',
        ru: '0',
      },
      shiftedValue: {
        en: ')',
        ru: ')',
      },
    },
    Minus: {
      row: 1,
      value: {
        en: '-',
        ru: '-',
      },
      shiftedValue: {
        en: '_',
        ru: '_',
      },
    },
    Equal: {
      row: 1,
      value: {
        en: '=',
        ru: '=',
      },
      shiftedValue: {
        en: '+',
        ru: '+',
      },
    },
    Backspace: {
      row: 1,
      value: {
        en: '',
        ru: '',
      },
      label: 'Backspace',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },

    Tab: {
      row: 2,
      value: {
        en: '\t',
        ru: '\t',
      },
      label: 'Tab',
      shiftedValue: {
        en: '\t',
        ru: '\t',
      },
    },
    KeyQ: {
      row: 2,
      value: {
        en: 'q',
        ru: 'й',
      },
      shiftedValue: {
        en: 'Q',
        ru: 'Й',
      },
    },
    KeyW: {
      row: 2,
      value: {
        en: 'w',
        ru: 'ц',
      },
      shiftedValue: {
        en: 'W',
        ru: 'Ц',
      },
    },
    KeyE: {
      row: 2,
      value: {
        en: 'e',
        ru: 'у',
      },
      shiftedValue: {
        en: 'E',
        ru: 'У',
      },
    },
    KeyR: {
      row: 2,
      value: {
        en: 'r',
        ru: 'к',
      },
      shiftedValue: {
        en: 'R',
        ru: 'К',
      },
    },
    KeyT: {
      row: 2,
      value: {
        en: 't',
        ru: 'е',
      },
      shiftedValue: {
        en: 'T',
        ru: 'Е',
      },
    },
    KeyY: {
      row: 2,
      value: {
        en: 'y',
        ru: 'н',
      },
      shiftedValue: {
        en: 'Y',
        ru: 'Н',
      },
    },
    KeyU: {
      row: 2,
      value: {
        en: 'u',
        ru: 'г',
      },
      shiftedValue: {
        en: 'U',
        ru: 'Г',
      },
    },
    KeyI: {
      row: 2,
      value: {
        en: 'i',
        ru: 'ш',
      },
      shiftedValue: {
        en: 'I',
        ru: 'Ш',
      },
    },
    KeyO: {
      row: 2,
      value: {
        en: 'o',
        ru: 'щ',
      },
      shiftedValue: {
        en: 'O',
        ru: 'Щ',
      },
    },
    KeyP: {
      row: 2,
      value: {
        en: 'p',
        ru: 'з',
      },
      shiftedValue: {
        en: 'P',
        ru: 'З',
      },
    },
    BracketLeft: {
      row: 2,
      value: {
        en: '[',
        ru: 'х',
      },
      shiftedValue: {
        en: '{',
        ru: 'Х',
      },
    },
    BracketRight: {
      row: 2,
      value: {
        en: ']',
        ru: 'ъ',
      },
      shiftedValue: {
        en: '}',
        ru: 'Ъ',
      },
    },
    Delete: {
      row: 2,
      value: {
        en: '',
        ru: '',
      },
      label: 'Delete',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },

    CapsLock: {
      row: 3,
      value: {
        en: '',
        ru: '',
      },
      label: 'CapsLock',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    KeyA: {
      row: 3,
      value: {
        en: 'a',
        ru: 'ф',
      },
      shiftedValue: {
        en: 'A',
        ru: 'Ф',
      },
    },
    KeyS: {
      row: 3,
      value: {
        en: 's',
        ru: 'ы',
      },
      shiftedValue: {
        en: 'S',
        ru: 'Ы',
      },
    },
    KeyD: {
      row: 3,
      value: {
        en: 'd',
        ru: 'в',
      },
      shiftedValue: {
        en: 'D',
        ru: 'В',
      },
    },
    KeyF: {
      row: 3,
      value: {
        en: 'f',
        ru: 'а',
      },
      shiftedValue: {
        en: 'F',
        ru: 'А',
      },
    },
    KeyG: {
      row: 3,
      value: {
        en: 'g',
        ru: 'п',
      },
      shiftedValue: {
        en: 'G',
        ru: 'П',
      },
    },
    KeyH: {
      row: 3,
      value: {
        en: 'h',
        ru: 'р',
      },
      shiftedValue: {
        en: 'H',
        ru: 'Р',
      },
    },
    KeyJ: {
      row: 3,
      value: {
        en: 'j',
        ru: 'о',
      },
      shiftedValue: {
        en: 'J',
        ru: 'О',
      },
    },
    KeyK: {
      row: 3,
      value: {
        en: 'k',
        ru: 'л',
      },
      shiftedValue: {
        en: 'K',
        ru: 'Л',
      },
    },
    KeyL: {
      row: 3,
      value: {
        en: 'l',
        ru: 'д',
      },
      shiftedValue: {
        en: 'L',
        ru: 'Д',
      },
    },
    Semicolon: {
      row: 3,
      value: {
        en: ';',
        ru: 'ж',
      },
      shiftedValue: {
        en: ':',
        ru: 'Ж',
      },
    },
    Quote: {
      row: 3,
      value: {
        en: "'",
        ru: 'э',
      },
      shiftedValue: {
        en: '"',
        ru: 'Э',
      },
    },
    Enter: {
      row: 3,
      value: {
        en: '',
        ru: '',
      },
      label: 'Enter',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },

    ShiftLeft: {
      row: 4,
      value: {
        en: '',
        ru: '',
      },
      label: 'Shift',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    KeyZ: {
      row: 4,
      value: {
        en: 'z',
        ru: 'я',
      },
      shiftedValue: {
        en: 'Z',
        ru: 'Я',
      },
    },
    KeyX: {
      row: 4,
      value: {
        en: 'x',
        ru: 'ч',
      },
      shiftedValue: {
        en: 'X',
        ru: 'Ч',
      },
    },
    KeyC: {
      row: 4,
      value: {
        en: 'c',
        ru: 'с',
      },
      shiftedValue: {
        en: 'C',
        ru: 'С',
      },
    },
    KeyV: {
      row: 4,
      value: {
        en: 'v',
        ru: 'м',
      },
      shiftedValue: {
        en: 'V',
        ru: 'М',
      },
    },
    KeyB: {
      row: 4,
      value: {
        en: 'b',
        ru: 'и',
      },
      shiftedValue: {
        en: 'B',
        ru: 'И',
      },
    },
    KeyN: {
      row: 4,
      value: {
        en: 'n',
        ru: 'т',
      },
      shiftedValue: {
        en: 'N',
        ru: 'Т',
      },
    },
    KeyM: {
      row: 4,
      value: {
        en: 'm',
        ru: 'ь',
      },
      shiftedValue: {
        en: 'M',
        ru: 'Ь',
      },
    },
    Comma: {
      row: 4,
      value: {
        en: ',',
        ru: 'б',
      },
      shiftedValue: {
        en: '<',
        ru: 'Б',
      },
    },
    Period: {
      row: 4,
      value: {
        en: '.',
        ru: 'ю',
      },
      shiftedValue: {
        en: '>',
        ru: 'Ю',
      },
    },
    Slash: {
      row: 4,
      value: {
        en: '/',
        ru: '.',
      },
      shiftedValue: {
        en: '?',
        ru: ',',
      },
    },
    ArrowUp: {
      row: 4,
      value: {
        en: '',
        ru: '',
      },
      label: '↑',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    ShiftRight: {
      row: 4,
      value: {
        en: '',
        ru: '',
      },
      label: 'Shift',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },

    ControlLeft: {
      row: 5,
      value: {
        en: '',
        ru: '',
      },
      label: 'Ctrl',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    Win: {
      row: 5,
      value: {
        en: '',
        ru: '',
      },
      label: 'Win',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    AltLeft: {
      row: 5,
      value: {
        en: '',
        ru: '',
      },
      label: 'Alt',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    Space: {
      row: 5,
      value: {
        en: '',
        ru: '',
      },
      label: '-',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    AltRight: {
      row: 5,
      value: {
        en: '',
        ru: '',
      },
      label: 'Alt',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    ControlRight: {
      row: 5,
      value: {
        en: '',
        ru: '',
      },
      label: 'Ctrl',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    ArrowLeft: {
      row: 5,
      value: {
        en: '',
        ru: '',
      },
      label: '←',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    ArrowDown: {
      row: 5,
      value: {
        en: '',
        ru: '',
      },
      label: '↓',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
    ArrowRight:{
      row: 5,
      value: {
        en: '',
        ru: '',
      },
      label: '→',
      shiftedValue: {
        en: '',
        ru: '',
      },
    },
  }
}

export function Key(keyObj) {
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

  const key = document.createElement('button');
  key.classList.add(...classList);
  return key;
}

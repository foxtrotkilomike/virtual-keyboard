export class Keyboard {
  constructor(language) {
    this.lang = language;
  }

  keys = {
    Backquote: {
      row: 0,
      en: {
        value: '`',
        shiftedValue: '~',
        isLetter: false,
      },
      ru: {
        value: 'ё',
        shiftedValue: 'Ё',
        isLetter: true,
      },
    },
    Digit1: {
      row: 0,
      en: {
        value: '1',
        shiftedValue: '!',
        isLetter: false,
      },
      ru: {
        value: '1',
        shiftedValue: '!',
        isLetter: false,
      },
    },
    Digit2: {
      row: 0,
      en: {
        value: '2',
        shiftedValue: '@',
        isLetter: false,
      },
      ru: {
        value: '2',
        shiftedValue: '"',
        isLetter: false,
      },
    },
    Digit3: {
      row: 0,
      en: {
        value: '3',
        shiftedValue: '#',
        isLetter: false,
      },
      ru: {
        value: '3',
        shiftedValue: '№',
        isLetter: false,
      },
    },
    Digit4: {
      row: 0,
      en: {
        value: '4',
        shiftedValue: '$',
        isLetter: false,
      },
      ru: {
        value: '4',
        shiftedValue: ';',
        isLetter: false,
      },
    },
    Digit5: {
      row: 0,
      en: {
        value: '5',
        shiftedValue: '%',
        isLetter: false,
      },
      ru: {
        value: '5',
        shiftedValue: '%',
        isLetter: false,
      },
    },
    Digit6: {
      row: 0,
      en: {
        value: '6',
        shiftedValue: '^',
        isLetter: false,
      },
      ru: {
        value: '6',
        shiftedValue: ':',
        isLetter: false,
      },
    },
    Digit7: {
      row: 0,
      en: {
        value: '7',
        shiftedValue: '&',
        isLetter: false,
      },
      ru: {
        value: '7',
        shiftedValue: '?',
        isLetter: false,
      },
    },
    Digit8: {
      row: 0,
      en: {
        value: '8',
        shiftedValue: '*',
        isLetter: false,
      },
      ru: {
        value: '8',
        shiftedValue: '*',
        isLetter: false,
      },
    },
    Digit9: {
      row: 0,
      en: {
        value: '9',
        shiftedValue: '(',
        isLetter: false,
      },
      ru: {
        value: '9',
        shiftedValue: '(',
        isLetter: false,
      },
    },
    Digit0: {
      row: 0,
      en: {
        value: '0',
        shiftedValue: ')',
        isLetter: false,
      },
      ru: {
        value: '0',
        shiftedValue: ')',
        isLetter: false,
      },
    },
    Minus: {
      row: 0,
      en: {
        value: '-',
        shiftedValue: '_',
        isLetter: false,
      },
      ru: {
        value: '-',
        shiftedValue: '_',
        isLetter: false,
      },
    },
    Equal: {
      row: 0,
      en: {
        value: '=',
        shiftedValue: '+',
        isLetter: false,
      },
      ru: {
        value: '=',
        shiftedValue: '+',
        isLetter: false,
      },
    },
    Backspace: {
      row: 0,
      label: 'Backspace',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },

    Tab: {
      row: 1,
      label: 'Tab',
      en: {
        value: '\t',
        shiftedValue: '\t',
        isLetter: false,
      },
      ru: {
        value: '\t',
        shiftedValue: '\t',
        isLetter: false,
      },
    },
    KeyQ: {
      row: 1,
      en: {
        value: 'q',
        shiftedValue: 'Q',
        isLetter: true,
      },
      ru: {
        value: 'й',
        shiftedValue: 'Й',
        isLetter: true,
      },
    },
    KeyW: {
      row: 1,
      en: {
        value: 'w',
        shiftedValue: 'W',
        isLetter: true,
      },
      ru: {
        value: 'ц',
        shiftedValue: 'Ц',
        isLetter: true,
      },
    },
    KeyE: {
      row: 1,
      en: {
        value: 'e',
        shiftedValue: 'E',
        isLetter: true,
      },
      ru: {
        value: 'у',
        shiftedValue: 'У',
        isLetter: true,
      },
    },
    KeyR: {
      row: 1,
      en: {
        value: 'r',
        shiftedValue: 'R',
        isLetter: true,
      },
      ru: {
        value: 'к',
        shiftedValue: 'К',
        isLetter: true,
      },
    },
    KeyT: {
      row: 1,
      en: {
        value: 't',
        shiftedValue: 'T',
        isLetter: true,
      },
      ru: {
        value: 'е',
        shiftedValue: 'Е',
        isLetter: true,
      },
    },
    KeyY: {
      row: 1,
      en: {
        value: 'y',
        shiftedValue: 'Y',
        isLetter: true,
      },
      ru: {
        value: 'н',
        shiftedValue: 'Н',
        isLetter: true,
      },
    },
    KeyU: {
      row: 1,
      en: {
        value: 'u',
        shiftedValue: 'U',
        isLetter: true,
      },
      ru: {
        value: 'г',
        shiftedValue: 'Г',
        isLetter: true,
      },
    },
    KeyI: {
      row: 1,
      en: {
        value: 'i',
        shiftedValue: 'I',
        isLetter: true,
      },
      ru: {
        value: 'ш',
        shiftedValue: 'Ш',
        isLetter: true,
      },
    },
    KeyO: {
      row: 1,
      en: {
        value: 'o',
        shiftedValue: 'O',
        isLetter: true,
      },
      ru: {
        value: 'щ',
        shiftedValue: 'Щ',
        isLetter: true,
      },
    },
    KeyP: {
      row: 1,
      en: {
        value: 'p',
        shiftedValue: 'P',
        isLetter: true,
      },
      ru: {
        value: 'з',
        shiftedValue: 'З',
        isLetter: true,
      },
    },
    BracketLeft: {
      row: 1,
      en: {
        value: '[',
        shiftedValue: '{',
        isLetter: false,
      },
      ru: {
        value: 'х',
        shiftedValue: 'Х',
        isLetter: true,
      },
    },
    BracketRight: {
      row: 1,
      en: {
        value: ']',
        shiftedValue: '}',
        isLetter: false,
      },
      ru: {
        value: 'ъ',
        shiftedValue: 'Ъ',
        isLetter: true,
      },
    },
    Delete: {
      row: 1,
      label: 'Delete',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },

    CapsLock: {
      row: 2,
      label: 'CapsLock',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },
    KeyA: {
      row: 2,
      en: {
        value: 'a',
        shiftedValue: 'A',
        isLetter: true,
      },
      ru: {
        value: 'ф',
        shiftedValue: 'Ф',
        isLetter: true,
      },
    },
    KeyS: {
      row: 2,
      en: {
        value: 's',
        shiftedValue: 'S',
        isLetter: true,
      },
      ru: {
        value: 'ы',
        shiftedValue: 'Ы',
        isLetter: true,
      },
    },
    KeyD: {
      row: 2,
      en: {
        value: 'd',
        shiftedValue: 'D',
        isLetter: true,
      },
      ru: {
        value: 'в',
        shiftedValue: 'В',
        isLetter: true,
      },
    },
    KeyF: {
      row: 2,
      en: {
        value: 'f',
        shiftedValue: 'F',
        isLetter: true,
      },
      ru: {
        value: 'а',
        shiftedValue: 'А',
        isLetter: true,
      },
    },
    KeyG: {
      row: 2,
      en: {
        value: 'g',
        shiftedValue: 'G',
        isLetter: true,
      },
      ru: {
        value: 'п',
        shiftedValue: 'П',
        isLetter: true,
      },
    },
    KeyH: {
      row: 2,
      en: {
        value: 'h',
        shiftedValue: 'H',
        isLetter: true,
      },
      ru: {
        value: 'р',
        shiftedValue: 'Р',
        isLetter: true,
      },
    },
    KeyJ: {
      row: 2,
      en: {
        value: 'j',
        shiftedValue: 'J',
        isLetter: true,
      },
      ru: {
        value: 'о',
        shiftedValue: 'О',
        isLetter: true,
      },
    },
    KeyK: {
      row: 2,
      en: {
        value: 'k',
        shiftedValue: 'K',
        isLetter: true,
      },
      ru: {
        value: 'л',
        shiftedValue: 'Л',
        isLetter: true,
      },
    },
    KeyL: {
      row: 2,
      en: {
        value: 'l',
        shiftedValue: 'L',
        isLetter: true,
      },
      ru: {
        value: 'д',
        shiftedValue: 'Д',
        isLetter: true,
      },
    },
    Semicolon: {
      row: 2,
      en: {
        value: ';',
        shiftedValue: ':',
        isLetter: false,
      },
      ru: {
        value: 'ж',
        shiftedValue: 'Ж',
        isLetter: true,
      },
    },
    Quote: {
      row: 2,
      en: {
        value: "'",
        shiftedValue: '"',
        isLetter: false,
      },
      ru: {
        value: 'э',
        shiftedValue: 'Э',
        isLetter: true,
      },
    },
    Enter: {
      row: 2,
      label: 'Enter',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },

    ShiftLeft: {
      row: 3,
      label: 'Shift',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },
    KeyZ: {
      row: 3,
      en: {
        value: 'z',
        shiftedValue: 'Z',
        isLetter: true,
      },
      ru: {
        value: 'я',
        shiftedValue: 'Я',
        isLetter: true,
      },
    },
    KeyX: {
      row: 3,
      en: {
        value: 'x',
        shiftedValue: 'X',
        isLetter: true,
      },
      ru: {
        value: 'ч',
        shiftedValue: 'Ч',
        isLetter: true,
      },
    },
    KeyC: {
      row: 3,
      en: {
        value: 'c',
        shiftedValue: 'C',
        isLetter: true,
      },
      ru: {
        value: 'с',
        shiftedValue: 'С',
        isLetter: true,
      },
    },
    KeyV: {
      row: 3,
      en: {
        value: 'v',
        shiftedValue: 'V',
        isLetter: true,
      },
      ru: {
        value: 'м',
        shiftedValue: 'М',
        isLetter: true,
      },
    },
    KeyB: {
      row: 3,
      en: {
        value: 'b',
        shiftedValue: 'B',
        isLetter: true,
      },
      ru: {
        value: 'и',
        shiftedValue: 'И',
        isLetter: true,
      },
    },
    KeyN: {
      row: 3,
      en: {
        value: 'n',
        shiftedValue: 'N',
        isLetter: true,
      },
      ru: {
        value: 'т',
        shiftedValue: 'Т',
        isLetter: true,
      },
    },
    KeyM: {
      row: 3,
      en: {
        value: 'm',
        shiftedValue: 'M',
        isLetter: true,
      },
      ru: {
        value: 'ь',
        shiftedValue: 'Ь',
        isLetter: true,
      },
    },
    Comma: {
      row: 3,
      en: {
        value: ',',
        shiftedValue: '<',
        isLetter: false,
      },
      ru: {
        value: 'б',
        shiftedValue: 'Б',
        isLetter: true,
      },
    },
    Period: {
      row: 3,
      en: {
        value: '.',
        shiftedValue: '>',
        isLetter: false,
      },
      ru: {
        value: 'ю',
        shiftedValue: 'Ю',
        isLetter: true,
      },
    },
    Slash: {
      row: 3,
      en: {
        value: '/',
        shiftedValue: '?',
        isLetter: false,
      },
      ru: {
        value: '.',
        shiftedValue: ',',
        isLetter: false,
      },
    },
    ArrowUp: {
      row: 3,
      label: '↑',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },
    ShiftRight: {
      row: 3,
      label: 'Shift',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },

    ControlLeft: {
      row: 4,
      label: 'Ctrl',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },
    Win: {
      row: 4,
      label: 'Win',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },
    AltLeft: {
      row: 4,
      label: 'Alt',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },
    Space: {
      row: 4,
      label: '-',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },
    AltRight: {
      row: 4,
      label: 'Alt',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },
    ControlRight: {
      row: 4,
      label: 'Ctrl',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },
    ArrowLeft: {
      row: 4,
      label: '←',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },
    ArrowDown: {
      row: 4,
      label: '↓',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },
    ArrowRight: {
      row: 4,
      label: '→',
      en: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
      ru: {
        value: '',
        shiftedValue: '',
        isLetter: false,
      },
    },
  };
}

export function Key(code, keyObj) {
  const classList = ['keyboard__key'];
  let id = '';
  if (keyObj.label) {
    classList.push('keyboard__key--special');
  }

  switch (code) {
    case 'Backspace':
      classList.push('keyboard__key--backspace');
      break;

    case 'Tab':
      id = 'tab';
      classList.push('keyboard__key--tab');
      break;

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

    case 'ControlLeft':
    case 'ControlRight':
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
      id = 'arr_up';
      classList.push('keyboard__key--arr');
      break;
    case 'ArrowDown':
      id = 'arr_down';
      classList.push('keyboard__key--arr');
      break;
    case 'ArrowRight':
      id = 'arr_right';
      classList.push('keyboard__key--arr');
      break;
    case 'ArrowLeft':
      id = 'arr_left';
      classList.push('keyboard__key--arr');
      break;

    default:
      classList.push('keyboard__key--standard');
  }

  const key = document.createElement('button');
  key.classList.add(...classList);
  if (id) {
    key.id = id;
  }
  return key;
}

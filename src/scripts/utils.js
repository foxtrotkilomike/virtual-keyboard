import { Key } from './keyboard.js'

export function createElement(type, className, textContent, attributes) {
  const element = document.createElement(type);
  if (className) {
    element.classList.add(...className);
  }

  if (textContent) {
    element.textContent = textContent;
  }

  if (attributes && attributes.length > 0) {
    for (attr of attributes) {
      element.setAttribute(attr, attributes[attr]);
    }
  }

  return element
}

export function changeKeyboardLayout(keyboard, keysArr) {
  keyboard.rows.forEach((row, rowIndex) => {
    row.childNodes.forEach((key, keyIndex) => {
      const keyObj = keysArr[rowIndex][keyIndex];
      key.textContent = keyObj.label || keyObj.value[keyboard.lang];
    });
  });
}

function makeKeyboardRows(lang, keysArr) {
  return keysArr.map(row => {
    const keyboardRowElement = createElement('div', ['keyboard__row']);
    const keysElementsArray = row.map(keyObj => {
      const keyElement = Key(keyObj);
      keyElement.textContent = keyObj.label || keyObj.value[lang];

      return keyElement
    });
    keyboardRowElement.append(...keysElementsArray);

    return keyboardRowElement
  });
}

export function makePage(keyboard, keys) {
  const wrapper = createElement('div', ['wrapper']);
  const container = createElement('div', ['_container']);
  const prompt = createElement('h1', ['prompt'], "Type in some text:");

  const textareaContainer = createElement('div', ['textarea', 'textarea__container']);
  const textarea = createElement('textarea', ['textarea__field'], '', {name: "field", id: "textarea", autofocus: ""});
  const resetButton = createElement('button', ['button', 'button__reset']);

  const keyboardContainer = createElement('div', ['keyboard']);
  const keyboardRowsWrapper = createElement('div', ['keyboard__wrapper']);
  const keyboardRows = makeKeyboardRows(keyboard.lang, keys);
  keyboard.rows = keyboardRows;
  changeKeyboardLayout(keyboard, keys);

  const caption = createElement('div', ['caption']);
  const captionText = createElement('p', ['caption__text']);
  const captionCode = createElement('code', [], 'Alt + Shift');
  captionText.append('Use ', captionCode, ' to change language');
  caption.append(captionText);

  keyboardRowsWrapper.append(...keyboardRows);
  keyboardContainer.append(keyboardRowsWrapper);

  textareaContainer.append(textarea, resetButton);

  container.append(prompt, textareaContainer, keyboardContainer, caption)
  wrapper.append(container);
  document.body.append(wrapper);
}

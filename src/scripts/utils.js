import { Key } from './keyboard.js';

export function createElement(type, className, textContent, attributes) {
  const element = document.createElement(type);
  if (className) {
    element.classList.add(...className);
  }

  if (textContent) {
    element.textContent = textContent;
  }

  if (attributes && Object.entries(attributes).length > 0) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  return element;
}

export function changeKeyboardLayout(kbd) {
  const keyboard = kbd;
  Object.keys(keyboard.keys).forEach((key) => {
    keyboard.keys[key].element.textContent = keyboard.keys[key].label
                                            || keyboard.keys[key][keyboard.lang].value;
  });
}

function makeKeyboardRows(kbd) {
  const keyboard = kbd;
  const keyboardRows = [];
  for (let i = 0; i < 5; i += 1) {
    keyboardRows.push(createElement('div', ['keyboard__row']));
  }

  Object.keys(keyboard.keys).forEach((key) => {
    const keyElement = Key(key, keyboard.keys[key]);
    keyElement.textContent = keyboard.keys[key].label || keyboard.keys[key][keyboard.lang].value;
    keyboard.keys[key].element = keyElement;
    keyboardRows[keyboard.keys[key].row].append(keyElement);
  });

  return keyboardRows;
}

export function makePage(keyboard) {
  const wrapper = createElement('div', ['wrapper']);
  const container = createElement('div', ['_container']);
  const prompt = createElement('h1', ['prompt'], 'Type in some text:');

  const textareaContainer = createElement('div', ['textarea', 'textarea__container']);
  const textarea = createElement('textarea', ['textarea__field'], '', { name: 'field', id: 'textarea', autofocus: '' });
  const resetButton = createElement('button', ['button', 'button__reset']);

  const keyboardContainer = createElement('div', ['keyboard']);
  const keyboardRowsWrapper = createElement('div', ['keyboard__wrapper']);
  const keyboardRows = makeKeyboardRows(keyboard);
  changeKeyboardLayout(keyboard);

  const caption = createElement('div', ['caption']);
  const captionText = createElement('p', ['caption__text']);
  const captionCode = createElement('code', [], 'Alt + Shift');
  captionText.append('Use ', captionCode, ' to change layout');
  caption.append(captionText);

  const notice = createElement('div', ['caption']);
  const noticeText = createElement('p', ['caption__text'], "!Notice some function keys or key combinations may trigger your browsers' hot keys (or even OS keys, like 'Win') and hence not highlight keyboard keys. In this case click anywhere on page and try again");
  notice.append(noticeText);

  keyboardRowsWrapper.append(...keyboardRows);
  keyboardContainer.append(keyboardRowsWrapper);

  textareaContainer.append(textarea, resetButton);

  container.append(prompt, textareaContainer, keyboardContainer, caption, notice);
  wrapper.append(container);
  document.body.prepend(wrapper);
}

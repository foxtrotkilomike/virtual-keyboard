
let lang = window.localStorage.getItem("lang") ? window.localStorage.getItem("lang") : window.localStorage.setItem("lang", 'en');

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

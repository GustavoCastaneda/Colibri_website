// Import stylesheets
import './style.css';
import './range-slider.css';

const gradient = document.querySelector('.gradient');
const controls = document.querySelectorAll('.controls [data-property]');

controls.forEach(control => {
  const prop = window
    .getComputedStyle(gradient)
    .getPropertyValue(`--${control.dataset.property}`);
  control.addEventListener('input', handlePropertyUpdate);
  control.setAttribute('value', JSON.parse(prop));
});

function handlePropertyUpdate(event) {
  const target = event.target;
  const value = target.value;
  const property = target.dataset.property;

  if (property === 'light-hue') {
    applyStyle(`--theme-hue`, value, document.body);
  } else {
    applyStyle(`--${property}`, value, gradient);
  }
}

function applyStyle(property, value, element) {
  element.style.setProperty(property, value);
}

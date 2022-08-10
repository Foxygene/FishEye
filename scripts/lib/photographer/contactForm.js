import { toggleVisibility } from '../utils.js';

export const initModal = (element) => {
  const modal = document.querySelector('.modal');

  const form = document.querySelector('.contact_form');

  const photographerName = document.createElement('h2');
  photographerName.textContent = element.name;
  photographerName.classList.add('header_text');
  modal.insertBefore(photographerName, modal.children[1]);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { firstName, lastName, email, yourMessage } = event.currentTarget.elements;
    console.log(firstName.value, lastName.value, email.value, yourMessage.value);
  });

  document.addEventListener('keydown', (event) => {
    const contactModal = document.querySelector('#contact_modal');
    if (!contactModal.classList.contains('hidden')) {
      if (event.key === 'Escape') toggleVisibility(contactModal);
    }
  });

  //add focus
};

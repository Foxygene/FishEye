import { getUserCardDOM } from '../lib/index/photographerCard.js';
import { getData } from '../lib/utils.js';

const { photographers } = await getData();

const photographersSection = document.querySelector('.photographer_section');

photographers.forEach((photographer) => {
  const userCardDOM = getUserCardDOM(photographer);
  photographersSection.appendChild(userCardDOM);
});

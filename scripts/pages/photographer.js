import { displayModal } from '../lib/photographer/contactForm.js';
import {
  countLikes,
  getFilterSelectorDOM,
  getPhotographerById,
  getPhotographerMedias,
  getUserHeaderDOM,
  getUserMediaDOM,
  getUserTotalLikesDOM,
} from '../lib/photographer/profile.js';
import { getData, toggleVisibility } from '../lib/utils.js';

const { photographers, medias } = await getData();

const modalCloseButton = document.querySelector('.contact_close_button');
modalCloseButton.addEventListener('click', () => {
  const contactModal = document.querySelector('#contact_modal');
  toggleVisibility(contactModal);
});

const profileSection = document.querySelector('#main');

const params = new URLSearchParams(document.location.search);
const photographerId = params.get('id');

const photographer = getPhotographerById(photographers, photographerId);

const photographerMedias = getPhotographerMedias(medias, photographerId);
const popPhotographerMedia = [...photographerMedias].sort((a, b) => b.likes - a.likes);

const datePhotographerMedia = [...photographerMedias].sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA - dateB;
});
const titlePhotographerMedia = [...photographerMedias].sort((a, b) => {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
});

export let activeFilter = popPhotographerMedia;

const totalLikes = countLikes(photographerMedias);

const userHeaderDOM = getUserHeaderDOM(photographer);

let userTotalLikesDOM = getUserTotalLikesDOM(totalLikes, photographer.price);
const userMediaDOM = getUserMediaDOM(popPhotographerMedia, photographerId, (activeLike) => {
  const updatedLikesDOM = getUserTotalLikesDOM(activeLike + totalLikes, photographer.price);
  userTotalLikesDOM.replaceWith(updatedLikesDOM);
  userTotalLikesDOM = updatedLikesDOM;
});

const filterSelectorDOM = getFilterSelectorDOM(['Popularité', 'Date', 'Titre'], (selected) => {
  if (selected === 'Popularité') {
    let mediaCounter = 0;
    popPhotographerMedia.forEach((media) => {
      const currentMedia = document.querySelector(`[data-id="${media.id}"]`);

      currentMedia.style.order = mediaCounter;
      activeFilter = popPhotographerMedia;
      mediaCounter = mediaCounter + 1;
    });
  }

  if (selected === 'Date') {
    let mediaCounter = 0;
    datePhotographerMedia.forEach((media) => {
      const currentMedia = document.querySelector(`[data-id="${media.id}"]`);

      currentMedia.style.order = mediaCounter;
      mediaCounter = mediaCounter + 1;
      activeFilter = datePhotographerMedia;
    });
  }

  if (selected === 'Titre') {
    let mediaCounter = 0;
    titlePhotographerMedia.forEach((media) => {
      const currentMedia = document.querySelector(`[data-id="${media.id}"]`);

      currentMedia.style.order = mediaCounter;
      mediaCounter = mediaCounter + 1;
      activeFilter = titlePhotographerMedia;
    });
  }
});

profileSection.append(userHeaderDOM, filterSelectorDOM, userMediaDOM, userTotalLikesDOM);
displayModal(photographer);

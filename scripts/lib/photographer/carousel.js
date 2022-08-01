import { activeFilter } from '../../pages/photographer.js';
import { mediaFactory } from '../utils.js';

export const getCarouselDOM = (id, clickedMedia) => {
  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel_container');

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  carouselContainer.appendChild(carousel);

  const leftButton = document.createElement('button');
  leftButton.classList.add('carousel_button', 'carousel_button_left');
  carousel.appendChild(leftButton);

  const leftArrow = document.createElement('img');
  leftArrow.setAttribute('src', 'assets/icons/right-arrow-red.svg');
  leftButton.appendChild(leftArrow);

  const carouselTrackContainer = document.createElement('div');
  carouselTrackContainer.classList.add('carousel_track_container');
  carousel.appendChild(carouselTrackContainer);

  const carouselTrack = document.createElement('ul');
  carouselTrack.classList.add('carousel_track');
  carouselTrackContainer.appendChild(carouselTrack);
  activeFilter.forEach((element) => {
    const carouselSlide = document.createElement('li');
    carouselSlide.classList.add('carousel_slide');
    carouselTrack.appendChild(carouselSlide);

    const slideMedia = mediaFactory(id, element);
    if (slideMedia.localName === 'video') {
      slideMedia.autoplay = true;
      slideMedia.loop = true;
    }
    if (slideMedia.src === clickedMedia.src) carouselSlide.classList.add('current_slide');
    slideMedia.classList.add('slide_media');
    carouselSlide.appendChild(slideMedia);

    const slideTitle = document.createElement('p');
    slideTitle.textContent = element.title;
    carouselSlide.appendChild(slideTitle);
  });

  const closeButton = document.createElement('button');
  closeButton.classList.add('carousel_close_btn');
  closeButton.addEventListener('click', () => {
    const carousel = document.querySelector('.carousel_container');
    carousel.remove();
  });
  carousel.appendChild(closeButton);

  const closeIcon = document.createElement('img');
  closeIcon.setAttribute('src', 'assets/icons/close-red.svg');
  closeButton.appendChild(closeIcon);

  const rightButton = document.createElement('button');
  rightButton.classList.add('carousel_button', 'carousel_button_right');
  carousel.appendChild(rightButton);

  const rightArrow = document.createElement('img');
  rightArrow.setAttribute('src', 'assets/icons/right-arrow-red.svg');
  rightButton.appendChild(rightArrow);

  document.querySelector('main').append(carouselContainer);
};

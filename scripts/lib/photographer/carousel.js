import { mediaFactory } from '../utils.js';

export const getCarouselDOM = (id, activeFilter, clickedMedia) => {
  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel_container');

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  carouselContainer.appendChild(carousel);

  const leftButton = document.createElement('button');
  leftButton.classList.add('carousel_button', 'carousel_button_left');
  carousel.appendChild(leftButton);

  const leftArrow = document.createElement('img');
  leftArrow.setAttribute('src', './assets/icons/right-arrow-red.svg');
  leftArrow.setAttribute('aria-label', 'Previous');
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
  carousel.appendChild(closeButton);

  const closeIcon = document.createElement('img');
  closeIcon.setAttribute('src', './assets/icons/close-red.svg');
  closeIcon.setAttribute('aria-label', 'Close');
  closeButton.appendChild(closeIcon);

  const rightButton = document.createElement('button');
  rightButton.classList.add('carousel_button', 'carousel_button_right');
  carousel.appendChild(rightButton);

  const rightArrow = document.createElement('img');
  rightArrow.setAttribute('src', './assets/icons/right-arrow-red.svg');
  rightArrow.setAttribute('aria-label', 'Next');
  rightButton.appendChild(rightArrow);

  document.querySelector('main').append(carouselContainer);
};

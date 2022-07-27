import { popPhotographerMedia } from '../../pages/photographer.js';
import { mediaFactory } from '../utils.js';

export const getCarouselDOM = (media, id) => {
  // const imageData = [ 'image1.png', 'img2.png', 'img3.png' ];

  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel_container');

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  carouselContainer.appendChild(carousel);

  const leftButton = document.createElement('button');
  leftButton.classList.add('carousel_button', 'carousel_button_left');
  carousel.appendChild(leftButton);

  const leftArrow = document.createElement('img');
  leftArrow.setAttribute('src', 'assets/icons/right-arrow.png');
  leftButton.appendChild(leftArrow);

  const carouselTrackContainer = document.createElement('div');
  carouselTrackContainer.classList.add('carousel_track_container');
  carousel.appendChild(carouselTrackContainer);

  const carouselTrack = document.createElement('ul');
  carouselTrack.classList.add('carousel_track');
  carouselTrackContainer.appendChild(carouselTrack);
  popPhotographerMedia.forEach((element) => {
    const carouselSlide = document.createElement('li');
    carouselSlide.classList.add('carousel_slide');
    carouselTrack.appendChild(carouselSlide);

    const slideMedia = mediaFactory(id, element);
    slideMedia.classList.add('slide_media');
    carouselSlide.appendChild(slideMedia);

    const slideTitle = document.createElement('p');
    slideTitle.textContent = element.title;
    carouselSlide.appendChild(slideTitle);
  });

  const close = document.createElement('button');
  close.classList.add('carousel_close_btn');
  close.setAttribute('src', 'assets/icons/close-black.svg');
  close.addEventListener('click', () => {
    const carousel = document.querySelector('.carousel_container');
    carousel.remove();
  });
  carousel.appendChild(close);

  const rightButton = document.createElement('button');
  rightButton.classList.add('carousel_button', 'carousel_button_right');
  carousel.appendChild(rightButton);

  const rightArrow = document.createElement('img');
  rightArrow.setAttribute('src', 'assets/icons/right-arrow.png');
  rightButton.appendChild(rightArrow);

  document.querySelector('main').append(carouselContainer);
};

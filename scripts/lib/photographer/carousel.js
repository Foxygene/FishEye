export const getCarouselDOM = () => {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftArrow = document.createElement('div');
  leftArrow.classList.add('left_arrow');
  carousel.appendChild(leftArrow);

  const mediaBox = document.createElement('div');
  mediaBox.classList.add('media_box');
  carousel.appendChild(mediaBox);

  const media = document.createElement('img');
  mediaBox.appendChild(media);

  const mediaTitle = document.createElement('p');
  mediaBox.appendChild(mediaTitle);

  const rightArrow = document.createElement('div');
  carousel.appendChild(rightArrow);

  const close = document.createElement('div');
  carousel.appendChild(close);
};

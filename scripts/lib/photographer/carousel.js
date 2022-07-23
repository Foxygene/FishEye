export const getCarouselDOM = (media, id) => {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftArrow = document.createElement('button');
  carousel.appendChild(leftArrow);

  const mediaBox = document.createElement('div');
  mediaBox.classList.add('carousel_media_box');
  carousel.appendChild(mediaBox);

  if (media.image) {
    const img = document.createElement('img');
    img.setAttribute('src', `assets/photographers/${id}/${media.image}`);
    mediaBox.appendChild(img);
  }

  if (media.video) {
    const vid = document.createElement('video');
    vid.setAttribute('src', `assets/photographers/${id}/${media.video}`);
    mediaBox.appendChild(vid);
  }

  const mediaTitle = document.createElement('p');
  mediaBox.appendChild(mediaTitle);

  const rightArrow = document.createElement('button');
  carousel.appendChild(rightArrow);

  const close = document.createElement('div');
  carousel.appendChild(close);

  const closeIcon = document.createElement('img');
  close.setAttribute('src', 'assets/icons/close.svg');
  close.appendChild(closeIcon);

  document.querySelector('main').append(carousel);
};

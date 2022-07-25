export const getCarouselDOM = (media, id) => {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftArrow = document.createElement('img');
  leftArrow.classList.add('left_arrow');
  leftArrow.setAttribute('src', 'assets/icons/right-arrow.png');
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

  const close = document.createElement('img');
  close.classList.add('carousel_close_btn');
  close.setAttribute('src', 'assets/icons/close-black.svg');
  close.addEventListener('click', () => {
    const carousel = document.querySelector('.carousel');
    carousel.remove();
  });
  carousel.appendChild(close);

  const rightArrow = document.createElement('img');
  rightArrow.classList.add('right_arrow');
  rightArrow.setAttribute('src', 'assets/icons/right-arrow.png');
  carousel.appendChild(rightArrow);

  document.querySelector('main').append(carousel);
};

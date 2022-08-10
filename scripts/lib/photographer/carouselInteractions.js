export const addCarouselInteractions = () => {
  const track = document.querySelector('.carousel_track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel_button_right');
  const prevButton = document.querySelector('.carousel_button_left');
  const closeButton = document.querySelector('.carousel_close_btn');

  const slideWidth = slides[0].getBoundingClientRect().width;

  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };

  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    if (targetSlide === null) return;
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
    if (track.childNodes[0] === targetSlide) {
      prevButton.classList.add('hidden');
    } else if (track.childNodes[track.childElementCount - 1] === targetSlide) {
      nextButton.classList.add('hidden');
    } else {
      prevButton.classList.remove('hidden');
      nextButton.classList.remove('hidden');
    }
  };

  nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
  });

  prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
  });

  closeButton.addEventListener('click', () => {
    const carousel = document.querySelector('.carousel_container');
    carousel.remove();
  });

  document.addEventListener('keydown', (event) => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const prevSlide = currentSlide.previousElementSibling;
    const keyPressed = event.key;

    if (keyPressed === 'ArrowRight') moveToSlide(track, currentSlide, nextSlide);
    if (keyPressed === 'ArrowLeft') moveToSlide(track, currentSlide, prevSlide);
    if (keyPressed === 'Escape') {
      const carousel = document.querySelector('.carousel_container');
      if (carousel === null) return;
      carousel.remove();
    }
  });

  const setBaseSlide = () => {
    const currentSlide = track.querySelector('.current_slide');

    moveToSlide(track, currentSlide, currentSlide);
  };

  setBaseSlide();
};

export const addCarouselInteractions = () => {
  const track = document.querySelector('.carousel_track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel_button_right');
  const prevButton = document.querySelector('.carousel_button_left');

  const slideWidth = slides[0].getBoundingClientRect().width;

  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };

  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
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

  const setBaseSlide = () => {
    const currentSlide = track.querySelector('.current_slide');

    moveToSlide(track, currentSlide, currentSlide);
  };

  setBaseSlide();
};

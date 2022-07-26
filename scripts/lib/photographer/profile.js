import { getSelectDOM, mediaFactory, toggleVisibility } from '../utils.js';
import { getCarouselDOM } from './carousel.js';
import { displayModal } from './contactForm.js';

export const getPhotographerById = (photographers, id) =>
  photographers.find((photographer) => photographer.id === parseInt(id));

export const getPhotographerMedias = (medias, id) => medias.filter((media) => media.photographerId === parseInt(id));

export const countLikes = (userMedia) => {
  let totalLikes = 0;

  userMedia.forEach((element) => {
    totalLikes = totalLikes + element.likes;
  });

  return totalLikes;
};

let activeLike = 0;
export const getUserHeaderDOM = (photographer) => {
  const { name, id, city, country, tagline, price, portrait } = photographer;
  const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

  const headerSection = document.createElement('div');
  headerSection.classList.add('photograph-header');

  const userInfos = document.createElement('div');
  userInfos.classList.add('user_infos');
  headerSection.appendChild(userInfos);

  const userName = document.createElement('h2');
  userName.classList.add('profile_name');
  userName.textContent = name;
  userInfos.appendChild(userName);

  const userLocation = document.createElement('p');
  userLocation.classList.add('profile_location');
  userLocation.textContent = `${city}, ${country}`;
  userInfos.appendChild(userLocation);

  const userQuote = document.createElement('p');
  userQuote.classList.add('profile_quote');
  userQuote.textContent = tagline;
  userInfos.appendChild(userQuote);

  const contactButton = document.createElement('button');
  contactButton.classList.add('contact_button');
  contactButton.addEventListener('click', () => {
    const contactModal = document.querySelector('#contact_modal');
    toggleVisibility(contactModal);
  });
  contactButton.textContent = 'Contactez-moi';
  headerSection.appendChild(contactButton);

  const userPicture = document.createElement('img');
  userPicture.setAttribute('src', picture);
  headerSection.appendChild(userPicture);

  return headerSection;
};

export const getFilterSelectorDOM = (options, onSelectChange) => {
  const filterBox = document.createElement('div');
  filterBox.classList.add('filter-box');

  const filterText = document.createElement('p');
  filterText.textContent = 'Trier par';
  filterBox.appendChild(filterText);

  const selectBox = document.createElement('div');
  selectBox.classList.add('custom-select');
  filterBox.appendChild(selectBox);

  const select = getSelectDOM(options);

  select.addEventListener('change', (event) => {
    onSelectChange(event.currentTarget.value);
  });

  selectBox.appendChild(select);

  const selectArrow = document.createElement('img');
  selectArrow.setAttribute('src', 'assets/icons/arrow.svg');
  selectArrow.classList.add('select-arrow');
  selectBox.appendChild(selectArrow);

  return filterBox;
};

export const getUserMediaDOM = (userMedia, id, onLikeChange) => {
  const mediaSection = document.createElement('div');
  mediaSection.classList.add('media_section');

  userMedia.forEach((media) => {
    const mediaBox = document.createElement('div');
    mediaBox.dataset.id = media.id;
    mediaBox.classList.add('media_box');
    mediaSection.appendChild(mediaBox);

    const mediaElement = mediaFactory(id, media);
    mediaBox.appendChild(mediaElement);
    mediaBox.firstChild.addEventListener('click', () => getCarouselDOM(media, id));

    const mediaInfos = document.createElement('div');
    mediaInfos.classList.add('media_infos');
    mediaBox.appendChild(mediaInfos);

    const mediaName = document.createElement('p');
    mediaName.classList.add('media_name');
    mediaName.textContent = media.title;
    mediaInfos.appendChild(mediaName);

    const mediaLikeBox = document.createElement('div');
    mediaLikeBox.classList.add('media_like_box');
    mediaInfos.appendChild(mediaLikeBox);

    const mediaLikeCount = document.createElement('p');
    mediaLikeCount.classList.add('media_like_count');
    mediaLikeCount.textContent = media.likes;
    mediaLikeBox.appendChild(mediaLikeCount);

    const mediaLikeIcon = document.createElement('div');
    mediaLikeIcon.classList.add('media_like_icon');
    mediaLikeIcon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.4 10.6 20C5.4 15.4 2 12.3 2 8.5 2 5.5 4.4 3 7.5 3A6 6 0 0 1 12 5a6 6 0 0 1 4.5-2c3 0 5.5 2.4 5.5 5.5 0 3.8-3.4 6.9-8.6 11.5L12 21.4Z"/></svg>';

    mediaLikeIcon.addEventListener('click', () => {
      if (mediaLikeIcon.classList.contains('active')) {
        mediaLikeCount.textContent = media.likes;
        mediaLikeIcon.classList.remove('active');
        mediaLikeCount.classList.remove('active');

        activeLike = activeLike - 1;
        onLikeChange(activeLike);
        return;
      }

      mediaLikeCount.textContent = media.likes + 1;
      mediaLikeIcon.classList.add('active');
      mediaLikeCount.classList.add('active');
      activeLike = activeLike + 1;
      onLikeChange(activeLike);
    });

    mediaLikeBox.appendChild(mediaLikeIcon);
  });

  return mediaSection;
};

export const getUserTotalLikesDOM = (userTotalLikes, price) => {
  const totalLikesSection = document.createElement('div');
  totalLikesSection.classList.add('total-likes-section');

  const totalLikesBox = document.createElement('div');
  totalLikesBox.classList.add('total-likes-box');
  totalLikesSection.appendChild(totalLikesBox);

  const totalLikesCounter = document.createElement('p');
  totalLikesCounter.textContent = userTotalLikes;
  totalLikesBox.appendChild(totalLikesCounter);

  const totalLikeIcon = document.createElement('div');
  totalLikeIcon.classList.add('total-likes-icon');
  totalLikeIcon.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.4 10.6 20C5.4 15.4 2 12.3 2 8.5 2 5.5 4.4 3 7.5 3A6 6 0 0 1 12 5a6 6 0 0 1 4.5-2c3 0 5.5 2.4 5.5 5.5 0 3.8-3.4 6.9-8.6 11.5L12 21.4Z"/></svg>';
  totalLikesBox.appendChild(totalLikeIcon);

  const dailyPrice = document.createElement('p');
  dailyPrice.textContent = `${price}€/jour`;
  totalLikesSection.appendChild(dailyPrice);

  return totalLikesSection;
};

const profileFactory = (photograph, userMedia, userTotalLikes) => {
  const { name, id, city, country, tagline, price, portrait } = photograph;

  const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
  const getUserHeaderDOM = () => {
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
    contactButton.setAttribute('onclick', 'displayModal()');
    contactButton.textContent = 'Contactez-moi';
    headerSection.appendChild(contactButton);

    const userPicture = document.createElement('img');
    userPicture.setAttribute('src', picture);
    headerSection.appendChild(userPicture);

    return headerSection;
  };

  const getUserMediaDOM = () => {
    const mediaSection = document.createElement('div');
    mediaSection.classList.add('media_section');

    //1 boucle pour trier les photos avec le bon id CHECKED BEFORE !!!!!!!!!!!! (in photographer.js)
    //2 boucle sur les bons id pour cree les elements du DOM (photos)
    userMedia.forEach((element) => {
      const mediaBox = document.createElement('div');
      mediaBox.classList.add('media_box');
      mediaSection.appendChild(mediaBox);

      const media = document.createElement('img');
      media.setAttribute('src', `assets/photographers/${id}/${element.image}`);
      mediaBox.appendChild(media);

      const mediaInfos = document.createElement('div');
      mediaInfos.classList.add('media_infos');
      mediaBox.appendChild(mediaInfos);

      const mediaName = document.createElement('p');
      mediaName.textContent = element.title;
      mediaInfos.appendChild(mediaName);

      const mediaLikeBox = document.createElement('div');
      mediaLikeBox.classList.add('media_like_box');
      mediaInfos.appendChild(mediaLikeBox);

      const mediaLikeCount = document.createElement('p');
      mediaLikeCount.textContent = element.likes;
      mediaLikeBox.appendChild(mediaLikeCount);

      const mediaLikeIcon = document.createElement('div');
      mediaLikeIcon.classList.add('media_like_icon');
      mediaLikeIcon.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.4 10.6 20C5.4 15.4 2 12.3 2 8.5 2 5.5 4.4 3 7.5 3A6 6 0 0 1 12 5a6 6 0 0 1 4.5-2c3 0 5.5 2.4 5.5 5.5 0 3.8-3.4 6.9-8.6 11.5L12 21.4Z"/></svg>';

      mediaLikeIcon.addEventListener('click', () => {
        if (mediaLikeIcon.classList.contains('active')) {
          mediaLikeCount.textContent = element.likes;
          mediaLikeIcon.classList.remove('active');
          console.log('prout');
          return;
        }

        mediaLikeCount.textContent = element.likes + 1;
        mediaLikeIcon.classList.add('active');
      });

      mediaLikeBox.appendChild(mediaLikeIcon);
    });
    //3 boucle (async!!!!) sur chaque element du DOM pour mettre les event listener
    return mediaSection;
  };

  const getUserTotalLikesDOM = () => {
    const totalLikesSection = document.createElement('div');
    totalLikesSection.classList.add('total-likes-section');

    const totalLikesCounter = document.createElement('p');
    totalLikesCounter.textContent = `${userTotalLikes}`;
    totalLikesSection.appendChild(totalLikesCounter);

    return totalLikesSection;
  };

  const userHeaderDom = getUserHeaderDOM();
  const userMediaDom = getUserMediaDOM();
  const userTotalLikesDOM = getUserTotalLikesDOM();

  return { userHeaderDom, userMediaDom, userTotalLikesDOM };
};

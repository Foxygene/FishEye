const profileFactory = (photograph, userMedia) => {
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
    console.log('prout');

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
      mediaInfos.appendChild(mediaLikeBox);

      const mediaLikeCount = document.createElement('p');
      mediaLikeCount.textContent = element.likes;
      mediaLikeBox.appendChild(mediaLikeCount);
    });

    //3 boucle (async!!!!) sur chaque element du DOM pour mettre les event listener

    return mediaSection;
  };

  return { getUserHeaderDOM, getUserMediaDOM };
};

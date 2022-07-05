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

  const getUserPhotosDOM = () => {
    const boxPhoto = document.createElement('div');

    //1 boucle pour trier les photos avec le bon id CHECKED BEFORE !!!!!!!!!!!! (in photographer.js)
    //2 boucle sur les bons id pour cree les elements du DOM (photos)
    userMedia.forEach((element = {}));

    //3 boucle (async!!!!) sur chaque element du DOM pour mettre les event listener

    return boxPhoto;
  };

  return { getUserHeaderDOM, getUserPhotosDOM };
};

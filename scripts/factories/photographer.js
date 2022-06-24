function photographerFactory(photographer) {
  const { name, id, city, country, tagline, price, portrait } = photographer;

  const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement('article');

    const seachParams = new URLSearchParams({ id });

    const articleLink = document.createElement('a');
    articleLink.classList.add('article-content');
    articleLink.setAttribute('href', `/photographer.html?${seachParams}`);

    const profilePictureElement = document.createElement('img');
    profilePictureElement.setAttribute('src', picture);

    const nameElement = document.createElement('h2');
    nameElement.textContent = name;

    const locationElement = document.createElement('p');
    locationElement.textContent = `${city}, ${country}`;

    const taglineElement = document.createElement('p');
    taglineElement.textContent = tagline;

    const priceElement = document.createElement('p');
    priceElement.textContent = `${price}€/jour`;

    article.appendChild(articleLink);
    articleLink.appendChild(profilePictureElement);
    articleLink.appendChild(nameElement);
    articleLink.appendChild(locationElement);
    articleLink.appendChild(taglineElement);
    articleLink.appendChild(priceElement);

    return article;
  }
  return { name, picture, getUserCardDOM };
}

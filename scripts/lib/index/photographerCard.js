export function getUserCardDOM(photographer) {
  const { name, id, city, country, tagline, price, portrait } = photographer;
  const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
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
  articleLink.append(profilePictureElement, nameElement, locationElement, taglineElement, priceElement);

  return article;
}

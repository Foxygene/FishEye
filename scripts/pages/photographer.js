import { getFilterSelectorDOM, getUserHeaderDOM, getUserMediaDOM, getUserTotalLikesDOM } from '../factories/profile.js';

const getData = async () => fetch('/data/data.json').then((response) => response.json());

const getPhotographerById = (photographers, id) =>
  photographers.find((photographer) => photographer.id === parseInt(id));

const getPhotographerMedias = (medias, id) => medias.filter((media) => media.photographerId === parseInt(id));

const countLikes = (userMedia) => {
  let totalLikes = 0;

  userMedia.forEach((element) => {
    totalLikes = totalLikes + element.likes;
  });

  return totalLikes;
};

async function main() {
  const { photographers, medias } = await getData();

  const profileSection = document.querySelector('#main');

  const params = new URLSearchParams(document.location.search);
  const photographerId = params.get('id');

  const photographer = getPhotographerById(photographers, photographerId);

  const photographerMedias = getPhotographerMedias(medias, photographerId);

  const totalLikes = countLikes(photographerMedias);

  const userHeaderDOM = getUserHeaderDOM(photographer);
  const filterSelectorDOM = getFilterSelectorDOM(['Popularité', 'Date', 'Titre']);
  let userTotalLikesDOM = getUserTotalLikesDOM(totalLikes, photographer.price);
  const userMediaDOM = getUserMediaDOM(photographerMedias, photographerId, (activeLike) => {
    const updatedLikesDOM = getUserTotalLikesDOM(activeLike + totalLikes, photographer.price);
    userTotalLikesDOM.replaceWith(updatedLikesDOM);
    userTotalLikesDOM = updatedLikesDOM;
  });

  profileSection.append(userHeaderDOM, filterSelectorDOM, userMediaDOM, userTotalLikesDOM);
}

main();

const getPhotographers = async () => fetch('/data/photographers.json').then((response) => response.json());

const params = new URLSearchParams(document.location.search);
const photographerId = params.get('id');

const idCheckUser = (photographers) => photographers.id === parseInt(photographerId);

const idCheckPhotos = (media) => {
  return media.filter((element) => element.photographerId === parseInt(photographerId));
};

const displayProfile = async (photograph, media) => {
  const profileSection = document.querySelector('#main');

  const profileModel = profileFactory(photograph, media);

  const userHeaderDom = profileModel.getUserHeaderDOM();
  profileSection.appendChild(userHeaderDom);

  const userMediaDom = profileModel.getUserMediaDOM();
  profileSection.appendChild(userMediaDom);
};

async function init() {
  const { photographers, media } = await getPhotographers();

  displayProfile(photographers[photographers.findIndex(idCheckUser)], idCheckPhotos(media));
}

init();

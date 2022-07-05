const getPhotographers = async () =>
  fetch('/data/photographers.json').then((response) => response.json());

const params = new URLSearchParams(document.location.search);
const photographerId = params.get('id');

const idCheckUser = (photographers) =>
  photographers.id === parseInt(photographerId);

const idCheckPhotos = (media) => {
  let userMedia = [];

  media.forEach((element) => {
    if (element.photographerId === parseInt(photographerId)) {
      userMedia.push(element);
    }
  });
  return userMedia;
};

const displayProfile = async (photograph, media) => {
  const profileSection = document.querySelector('#main');

  const profileModel = profileFactory(photograph, media);

  const userHeaderDom = profileModel.getUserHeaderDOM();
  profileSection.appendChild(userHeaderDom);

  const userPicturesDom = profileModel.getUserPhotosDOM();
  profileSection.appendChild(userPicturesDom);
};

async function init() {
  const { photographers, media } = await getPhotographers();

  displayProfile(
    photographers[photographers.findIndex(idCheckUser)],
    idCheckPhotos(media)
  );
}

init();

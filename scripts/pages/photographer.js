const getPhotographers = async () => fetch('/data/photographers.json').then((response) => response.json());

const params = new URLSearchParams(document.location.search);
const photographerId = params.get('id');

const idCheckUser = (photographers) => photographers.id === parseInt(photographerId);

const idCheckMedia = (media) => {
  return media.filter((element) => element.photographerId === parseInt(photographerId));
};

const getTotalLikes = (userMedia) => {
  let totalLikes = 0;

  userMedia.forEach((element) => {
    totalLikes = totalLikes + element.likes;
  });

  return totalLikes;
};

const displayProfile = async (photograph, userMedia, userTotalLikes) => {
  const profileSection = document.querySelector('#main');

  const profileModel = profileFactory(photograph, userMedia, userTotalLikes);

  const userHeaderDom = profileModel.getUserHeaderDOM();
  profileSection.appendChild(userHeaderDom);

  const userMediaDom = profileModel.getUserMediaDOM();
  profileSection.appendChild(userMediaDom);

  const userTotalLikesDOM = profileModel.getUserTotalLikesDOM();
  profileSection.appendChild(userTotalLikesDOM);
};

async function init() {
  const { photographers, media } = await getPhotographers();

  displayProfile(
    photographers[photographers.findIndex(idCheckUser)],
    idCheckMedia(media),
    getTotalLikes(idCheckMedia(media))
  );
}

init();

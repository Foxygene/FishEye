const getPhotographers = async () =>
  fetch('/data/photographers.json').then((response) => response.json());

const params = new URLSearchParams(document.location.search);
const photographerId = params.get('id');

const idCheck = (photographers) =>
  photographers.id === parseInt(photographerId);

const displayProfile = async (photograph) => {
  const headerSection = document.querySelector('#main');

  const profileModel = profileFactory(photograph);

  const userHeaderDom = profileModel.getUserHeaderDOM();
  headerSection.appendChild(userHeaderDom);
};

async function init() {
  const { photographers, media } = await getPhotographers();
  displayProfile(photographers[photographers.findIndex(idCheck)]);
}

init();

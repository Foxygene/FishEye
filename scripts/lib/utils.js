export const getData = async () => fetch('/data/data.json').then((response) => response.json());

export const getSelectDOM = (options) => {
  const select = document.createElement('select');

  options.forEach((option) => {
    const optionDOM = document.createElement('option');
    optionDOM.setAttribute('value', option);
    optionDOM.textContent = option;
    select.appendChild(optionDOM);
  });

  return select;
};

export const toggleVisibility = (element) => {
  element.classList.toggle('hidden');
};

export const mediaFactory = (id, media) => {
  if (media.image) {
    const img = document.createElement('img');
    img.setAttribute('src', `assets/photographers/${id}/${media.image}`);
    return img;
  }

  if (media.video) {
    const vid = document.createElement('video');
    vid.setAttribute('src', `assets/photographers/${id}/${media.video}`);
    return vid;
  }
  throw new Error('media invalid');
};

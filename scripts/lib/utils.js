export const getData = async () => fetch('/data/data.json').then((response) => response.json());

export const getDrodownSelectorDOM = (options, onSelectChange) => {
  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');

  const selectedOption = document.createElement('a');
  selectedOption.classList.add('selected-option');
  selectedOption.addEventListener('click', onSelectChange);

  selectedOption.textContent = options[0];
  dropdown.appendChild(selectedOption);

  const optionsBox = document.createElement('div');
  optionsBox.classList.add('options-box');
  dropdown.appendChild(optionsBox);

  options.forEach((option, i) => {
    if (i === 0) return;
    const optionDOM = document.createElement('a');
    optionDOM.addEventListener('click', onSelectChange);
    optionDOM.classList.add('dropdown-option');

    optionDOM.textContent = option;
    optionsBox.appendChild(optionDOM);
  });

  const selectArrow = document.createElement('img');
  selectArrow.setAttribute('src', 'assets/icons/arrow.svg');
  selectArrow.classList.add('select-arrow');
  dropdown.appendChild(selectArrow);

  return dropdown;
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

export const displayModal = (element) => {
  const modal = document.querySelector('.modal');

  const photographerName = document.createElement('h2');
  photographerName.textContent = element.name;
  photographerName.classList.add('header_text');
  modal.insertBefore(photographerName, modal.children[1]);
};

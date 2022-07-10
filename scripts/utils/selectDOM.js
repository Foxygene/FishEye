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

export const displayModal = (element) => {
  const modal = document.querySelector('.modal');

  const sendBtn = document.querySelector('#send_btn');

  const photographerName = document.createElement('h2');
  photographerName.textContent = element.name;
  photographerName.classList.add('header_text');
  modal.insertBefore(photographerName, modal.children[1]);

  const inputsConsoleLogs = () => {
    const firstName = document.querySelector('#first_name');
    console.log(firstName);

    const lastName = document.querySelector('#last_name');
    console.log(lastName);

    const email = document.querySelector('#email');
    console.log(email);

    const yourMessage = document.querySelector('#your_message');
    console.log(yourMessage);

    sendBtn.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('twerk');
      inputsConsoleLogs();
    });
  };
};

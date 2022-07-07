const getData = async () => fetch('/data/data.json').then((response) => response.json());

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function main() {
  // Récupère les datas des photographes
  const { photographers } = await getData();
  displayData(photographers);
}

main();

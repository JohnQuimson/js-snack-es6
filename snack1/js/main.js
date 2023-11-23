'use strict';

const biciCorsa = [
  {
    nome: 'race',
    peso: 6,
    img: 'img/race.png',
  },
  {
    nome: 'endurance',
    peso: 9,
    img: 'img/endurance.png',
  },
  {
    nome: 'aero',
    peso: 8,
    img: 'img/aero.png',
  },
];

const container = document.querySelector('.container');
let indexBiciLeggera = null;

biciCorsa.forEach((bici, index) => {
  const { nome, peso, img } = bici;

  if (indexBiciLeggera === null || peso < biciCorsa[indexBiciLeggera].peso) {
    indexBiciLeggera = index;
  }

  const bike = document.createElement('div');
  bike.classList.add('card');

  bike.innerHTML = `
    <div class="cont-img">
      <img src="${img}" alt="${index}" />
    </div>
    <h3>Nome: ${nome}</h3>
    <span>peso: ${peso} kg</span>
  `;

  container.appendChild(bike);

  if (index === indexBiciLeggera) {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'La più leggera';
    bike.appendChild(paragraph);
  }
});

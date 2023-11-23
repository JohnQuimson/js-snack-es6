'use strict';

/*
<div class="container">
      <img src="" alt="">
      <h3></h3>
      <span></span>
    </div>
*/

const biciCorsa = [
  {
    nome: 'race',
    peso: 8,
    img: 'img/race.png',
  },
  {
    nome: 'endurance',
    peso: 9,
    img: 'img/endurance.png',
  },
  {
    nome: 'aero',
    peso: 7,
    img: 'img/aero.png',
  },
];

const container = document.querySelector('.container');

biciCorsa.forEach((biciCorsa, index) => {
  const { nome, peso, img } = biciCorsa;

  const bike = ` <div class="card">
      <div class="cont-img">
        <img src="${img}" alt="${index}" />
      </div>
      <h3>Nome: ${nome}</h3>
      <span>peso: ${peso} kg</span>
    </div>`;

  container.innerHTML += bike;
});

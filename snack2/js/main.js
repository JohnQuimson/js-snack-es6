'use strict';

const teams = [
  {
    nome: 'Lakers',
    punti: undefined,
    falli: undefined,
  },
  {
    nome: 'Chicago',
    punti: undefined,
    falli: undefined,
  },
  {
    nome: 'Warriors',
    punti: undefined,
    falli: undefined,
  },
];

console.log(teams);

teams.forEach((squadra) => {
  squadra.punti = Math.floor(Math.random() * 80) + 1;
  squadra.falli = Math.floor(Math.random() * 10) + 1;
});

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

teams.forEach((squadra) => {
  squadra.punti = Math.floor(Math.random() * 100 + 1);
  squadra.falli = Math.floor(Math.random() * 20 + 1);
});

//uso map e destructuration per creare e aggiungere gli elementi desiderati dell array
const newArrTeam = teams.map(({ nome, falli }) => ({
  nome,
  falli,
}));

console.log('Squadre:', teams);
console.log('Nuovo array:', newArrTeam);

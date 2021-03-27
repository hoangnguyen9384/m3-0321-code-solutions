import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const content = (
  <ul>
    {
      pokedex.map(x => <li key={x.number}>{x.name}</li>)
    }
  </ul>
);

ReactDOM.render(
  <div>{content}</div>,
  document.getElementById('root')
);

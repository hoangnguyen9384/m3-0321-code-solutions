import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function Pokemon(props) {
  const content = (
    <ul>
      {props.pokedex.map(pokemons =>
      <li key={pokemons.number}>{pokemons.name}</li>
      )}
    </ul>
  );
  return (
      <ul>{content}</ul>
  );
}

ReactDOM.render(
 <Pokemon pokedex={pokedex}/>,
 document.getElementById('root')
);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err.message));

fetch('https://pokeapi.co/api/v2/pokemon/3')
  .then(res => res.json())
  .then(data => console.log('My Pokemon: ', data))
  .catch(err => console.log(err.message));

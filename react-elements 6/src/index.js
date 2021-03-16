import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
  'h1',
  [null],
  'Hello, React!'
);
// console.log(element);

ReactDOM.render(
  element,
  document.querySelector('#root')
);

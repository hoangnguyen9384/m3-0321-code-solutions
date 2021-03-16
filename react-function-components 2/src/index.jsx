import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = () => {
  return <button> Click Me! </button>;
};

// const element = <CustomButton/>;

ReactDOM.render(
  <CustomButton/>,
  document.getElementById('root')
);

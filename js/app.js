import React from 'react';
import ReactDOM from 'react-dom';

const order = {
    title: 'Fresh fruits package',
};

ReactDOM.render(
  <h1>{order.title}</h1>,
  document.querySelector('.root')
);

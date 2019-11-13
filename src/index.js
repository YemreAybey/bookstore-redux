import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const initialState = [
  { id: 1, title: 'My Book', category: 'Fiction' },
  { id: 2, title: 'Good, Bad and Ugly', category: 'Fiction' },
];

ReactDOM.render(<App />, document.querySelector('#root'));

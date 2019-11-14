import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import './assets/main.css';
import combinedReducer from './reducers/index';
import idGen from './utils/idGenerator';
import App from './components/App';

const initialStore = {
  books: [
    {
      id: idGen(),
      title: 'My Book',
      author: 'Yemre',
      category: 'History',
    },
    {
      id: idGen(),
      title: 'Good, Bad and Ugly',
      author: 'Ebuka',
      category: 'Action',
    },
  ],
  filter: '',
};

const store = createStore(combinedReducer, initialStore);

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWrapper />, document.querySelector('#root'));

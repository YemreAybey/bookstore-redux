import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducer from './reducers/index';
import idGen from './utils/idGenerator';
import App from './components/App';

const initialStore = {
  books: [
    { id: idGen(), title: 'My Book', category: 'History' },
    { id: idGen(), title: 'Good, Bad and Ugly', category: 'Action' },
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

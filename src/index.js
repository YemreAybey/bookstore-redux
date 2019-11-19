import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'font-awesome/css/font-awesome.min.css';
import './assets/main.css';
import combinedReducer from './reducers/index';
import App from './components/App';

const initialStore = {
  books: [],
  filter: '',
};

const store = createStore(combinedReducer, initialStore, applyMiddleware(thunk));

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWrapper />, document.querySelector('#root'));

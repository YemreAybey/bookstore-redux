import axios from 'axios';

export default axios.create({
  baseURL: 'https://bookstore-redux-api.herokuapp.com/api/v1',
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

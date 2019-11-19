import axios from 'axios';

export default axios.create({
  baseURL: 'http://bookstore-redux-api.herokuapp.com/api/v1',
});

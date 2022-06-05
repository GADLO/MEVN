import api from './api';

export default {
  fetchData() {
    return api.get('/servertest');
  },
};

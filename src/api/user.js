import axios from '../libs/api.request';
export const getUser = (params) => {
    return axios.request({
      url: '/api/users',
      params,
      method: 'GET'
    })
  }
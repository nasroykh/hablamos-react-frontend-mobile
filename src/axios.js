import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://192.168.1.7:4444'
    // baseURL: 'http://localhost:4444'
    baseURL: 'https://fierce-inlet-31066.herokuapp.com'
});

export default instance;
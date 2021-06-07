import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fierce-inlet-31066.herokuapp.com'
});

export default instance;

import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? "" : 'http://localhost:3000' ;
// 'https://secret-fjord-93842.herokuapp.com/'

const api = axios.create({
	baseURL: baseUrl,
});

export default api;
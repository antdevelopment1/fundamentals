import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID db4714e2ac3ef3a98766944cedbce241295f41d25b182624e544c7c3a82e3ab8'
    }
});
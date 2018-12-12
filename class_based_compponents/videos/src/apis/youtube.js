import axios from axios;

const KEY = AIzaSyDqIeSCDla4eA6csJdJWD1QDElr_iPGHmY;


export default axios.create({
    baseURL: 'https://www.googleapis.om/youtube/v3',
    params: {
        part: snippet,
        maxResults: 5,
        key: KEY
    }
})
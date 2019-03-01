import axios from 'axios';

const KEY = 'AIzaSyBGnhvcuMkje36z5cgCG4YkcS6of_d-UaE';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})
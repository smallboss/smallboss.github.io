import axios from 'axios';

import URLData from './config.json';


export default {
    getVideoListByTitle(videoTitle = '') {
        const url = `${URLData.firstURL}&q=${videoTitle}&key=${URLData.API_key}`;
        console.log("API url: " + url);
        
        return axios.get(url);
    }
}

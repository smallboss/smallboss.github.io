import axios from 'axios';

import URLData from '../../etc/config.json';


export default {
    getVideoListByTitle(videoTitle = '') {
        console.log(videoTitle + '____')
        return axios.get(`${URLData.firstURL}&q=${videoTitle}&key=${URLData.API_key}`);
    }
}

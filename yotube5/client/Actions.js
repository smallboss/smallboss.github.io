import Constants from './AppConstants';

import API from './api.js';

export function getVideoListByTitle(videoTitle = '') {
    return{
        type: Constants.PROMISE,
        actions: [Constants.VIDEO_LIST_LOADING, Constants.VIDEO_LIST_LOADED, Constants.VIDEO_LIST_FAILURE],
        promise: API.getVideoListByTitle(videoTitle)
    }
}

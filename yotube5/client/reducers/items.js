import Constants from '../constants/AppConstants.js'

export default function(state = [], action) {
    switch (action.type) {
        case Constants.VIDEO_LIST_LOADED:
            return action.data.data.items;

        default: 
            return state;
    }
}
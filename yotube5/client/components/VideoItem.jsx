import React, {Component} from 'react';
import URLData from '../../etc/config.json';

class VideoItem extends Component{
    render() {
        return (
            <div className='VideoItem col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                <iframe 
                    width="100%" height="315" 
                    src={URLData.firstURLVideo + this.props.videoItem.id.videoId} 
                    frameBorder="0" 
                    allowFullScreen>
                </iframe>
            </div>
        );
    }
};

export default VideoItem;

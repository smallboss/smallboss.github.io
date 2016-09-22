import React, {Component} from 'react';
import VideoItem from './VideoItem.jsx';


class VideoList extends Component{
    render() {


        const d = this.props.videoList;

        return (
            <div className="VideoList row">
                {
                    this.props.videoList.map( (item, key) => 
                        <VideoItem 
                            videoItem={item} 
                            key={key} />
                    )
                }
            </div>
        );
    }
};

export default VideoList;
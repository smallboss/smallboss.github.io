import React, {Component} from 'react';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {getVideoListByTitle} from '../actions/Actions.js';

import SearchField from './SearchField.jsx';
import VideoList from './VideoList.jsx';

import './App.less';


class App extends Component {
    constructor(props) {
        super(props);
        this.handleSearchVideo = this.handleSearchVideo.bind(this);
    }


    handleSearchVideo(videoTitle) {
        this.props.getVideoListByTitle(videoTitle);
    }


    render() {
        return (
            <div className='App container'>
                <h2 className='App__header row'>YouTu.be searcher 5</h2>
                <SearchField onSearchVideo={this.handleSearchVideo}/>
                <VideoList videoList={this.props.items}/>
            </div>
        );
    }
}

export default connect(
    state => ({items: state.items}),
    dispatch => bindActionCreators({getVideoListByTitle}, dispatch)
)(App);

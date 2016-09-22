import React, {Component} from 'react';


class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSearchVideo = this.handleSearchVideo.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }


    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }


    handleSearchVideo() {
        this.props.onSearchVideo(this.state.text);
    }


    handleEnter(event) {
        if(event.key === 'Enter'){
            this.handleSearchVideo();
        }
    }

    render() {
        return (
            <div className='Editor row'>
                <div className="edit-inner col-lg-4 col-md-6 col-sm-6 col-lg-12">
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search for..." 
                            value={this.state.text}
                            onKeyPress={this.handleEnter}
                            onChange={this.handleTextChange} />
                        <span className="input-group-btn">
                            <button 
                                className="btn btn-default" 
                                type="button"
                                disabled={!this.state.text}
                                onClick={this.handleSearchVideo}>
                                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
};

export default SearchField;

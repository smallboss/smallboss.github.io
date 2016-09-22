import React, {Component} from 'react';


class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSearchVideo = this.handleSearchVideo.bind(this);
    }


    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }


    handleSearchVideo() {
        this.props.onSearchVideo(this.state.text);
    }

    render() {
        return (
            <div className='Editor row'>
                <div className="edit-inner col-lg-4 col-md-7 col-sm-8 col-lg-12">
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search for..." 
                            value={this.state.text}
                            onChange={this.handleTextChange} />
                        <span className="input-group-btn">
                            <button 
                                className="btn btn-default" 
                                type="button"
                                disabled={!this.state.text}
                                onClick={this.handleSearchVideo}>Go!
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
};

export default SearchField;

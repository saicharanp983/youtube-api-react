import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';


const API_KEY = 'AIzaSyAp4hDsbDHNYF05Hk4cMF2jW2YtZ2drXsM';

class App extends Component {

    constructor(props) {
        super(props);
        const initialSearchTerm = 'United States of America';


        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch(this.initialSearchTerm);
    }

    videoSearch(term){
        console.log(term);
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            console.log(this.state.videos);
        });
    }

    render() {
        const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300);
        
        return (
            <div>
                <SearchBar onSearch={videoSearch}/> 
                <VideoDetail video={this.state.selectedVideo} />     
                <VideoList 
                videos={this.state.videos} 
                onVideoSelect={ (selectedVideo) => { this.setState({selectedVideo: selectedVideo})}}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.start'));
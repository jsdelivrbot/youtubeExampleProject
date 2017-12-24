import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar'; 
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBvEMuDzRQIH5vFTicJmHEJ2Le-SrKXK8U';


class App extends Component {
	constructor(props) {
		super(props);
		this.state= { videos: [] };

		YTSearch({key: API_KEY,term:'katy perry'}, (videos) => {
		this.setState({ videos });
		//This is the same as this.setState({videos:videos});
  });
}
	render () {
		return (
	<div>
		<SearchBar />
		<VideoDetail video={this.state.videos[0]}/>
		<VideoList videos={this.state.videos}/>
	</div>
  );
 }
}

ReactDOM.render(<App />, document.querySelector('.container'));
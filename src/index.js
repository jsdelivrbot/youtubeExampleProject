import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'; 

const API_KEY = 'AIzaSyCV2T1e-JPxGeMSt4g2G79YcbUj5TIaxZ0';

const App = () => {
 return (
	<div>
		<SearchBar />
	</div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles/app.scss';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
		super(props);
		this.state = {};
	}
	
  render() {
		return (
			<div className="app-container">
				
				<Footer />
			</div>
		);
  }
}

export default App;
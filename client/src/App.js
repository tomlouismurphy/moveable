import React, { Component } from 'react';
import './App.css';
import {MainMap} from './MainMap/MainMap.js';
import {IntroGraphic} from './IntroGraphic/IntroGraphic.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			locations: [],
		}
	}
	componentDidMount(){
		fetch('http://localhost:9292/locations')
		.then(response => response.json())
		.then(locations => {
			const state = this.state;
			for (let i = 0; i < locations.length; i++){
				state.locations.push(locations[i]);
			}
			this.setState(state);
		})
		.catch(err => console.log(err))
	}
	addNewLocation = (location) => {
		fetch('http://localhost:9292/locations', {
			method: 'post',
			body: JSON.stringify(location)
		})
		.then(
			fetch('http://localhost:9292/locations')
			.then(response => response.json())
			.then(locations => {
				const state = this.state;
				for (let i = 0; i < locations.length; i++){
					state.locations.push(locations[i]);
				}
				this.setState(state);
			}))
	}
	render() {
		return(
			<div>
				<div id="main-title">
					<h1 id="text-title">Moveable</h1>
				</div>
				<div className="row">
					<div className="col s6">
						<MainMap locations={this.state.locations} />
					</div>
					<div className="col s6">
						<IntroGraphic locations={this.state.locations} />
					</div>
				</div>
			</div>
		)
	}
}

export default App;
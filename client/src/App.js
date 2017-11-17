import React, { Component } from 'react';
import './App.css';
import {MainMap} from './MainMap/MainMap.js';
import {IntroGraphic} from './IntroGraphic/IntroGraphic.js';
const request = require('superagent');

class App extends Component {
	constructor() {
		super();
		this.state = {
			locations: [],
			entrys: []
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
		.catch(err => console.log(err));
		fetch('http://localhost:9292/entrys')
		.then(response => response.json())
		.then(entrys => {
			const state = this.state;
			for (let i = 0; i < entrys.length; i++){
				state.entrys.push(entrys[i]);
			}
			this.setState(state);
			console.log(this.state);
		})
		.catch(err => console.log(err));
	}
	getAllDatabase = () => {
		fetch('http://localhost:9292/locations')
		.then(response => response.json())
		.then(locations => {
			const state = this.state;
			for (let i = 0; i < locations.length; i++){
				state.locations.push(locations[i]);
			}
			this.setState(state);
		})
		.catch(err => console.log(err));
		fetch('http://localhost:9292/entrys')
		.then(response => response.json())
		.then(entrys => {
			const state = this.state;
			for (let i = 0; i < entrys.length; i++){
				state.entrys.push(entrys[i]);
			}
			this.setState(state);
			console.log(this.state);
		})
		.catch(err => console.log(err));
	}
	addNewLocation = (location) => {
		fetch('http://localhost:9292/locations', {
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: JSON.stringify([
				{name: location.name},
				{latitude: location.latitude},
				{longitude: location.longitude}
			]),
		})
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
					<div id="background" className="col s6">
						<IntroGraphic locations={this.state.locations} entrys={this.state.entrys} addNewLocation={this.addNewLocation} />
					</div>
				</div>
			</div>
		)
	}
}

export default App;
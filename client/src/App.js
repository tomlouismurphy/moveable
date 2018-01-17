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
			entrys: [],
			clickedLocation: ''
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
		console.log(location);
		request
			.post('http://localhost:9292/locations')
			.send({ name: location.name, latitude: location.latitude, longitude: location.longitude })
			.end((err, res) => {
				console.log(res.req._data);
				const state = this.state;
				state.locations.push(res.req._data);
				this.setState(state);
				console.log(this.state.locations);
			});
	}
	clickLocation = (location) => {
		const state = this.state;
		state.clickedLocation = location;
		this.setState(state);
	}
	render() {
		return(
			<div>
				<div id="main-title">
					<h1 id="text-title">Moveable</h1>
				</div>
				<div className="row">
					<div className="col s6">
						<h4>{this.state.clickedLocation}</h4>
						<MainMap locations={this.state.locations} clickLocation={this.clickLocation} />
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
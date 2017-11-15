import React, { Component } from 'react';
import './App.css';
import GoogleMap from 'google-map-react';
import {SelectedEntry} from './SelectedEntry/SelectedEntry.js';
const google = window.google;

class App extends Component {
	constructor() {
		super();
		this.state = {
			center: {lat: 41.8781, lng: -87.6298},
			zoom: 10,
			entrySelected: false,
			assignNewLocation: false,
			locations: []
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
	grabLocation = () => {
		google.maps.event.addListener('click', (e) => {
			console.log(e.latLng);
		})
	}
	selectMemory = (e) => {
		const state = this.state;
		state.entrySelected = !state.entrySelected;
		this.setState(state);
	}
	renderMarkers(map, maps) {
		for (let i = 0; i < this.state.locations.length; i++){
			const marker = new maps.Marker({
				position: {lat: this.state.locations[i].latitude, lng: this.state.locations[i].longitude},
				map,
				title: this.state.locations[i].name
			});
		}
	}
	render() {
		console.log(google);
		const style = {
			width: '400px',
			height: '400px'
		}
		return(
			<div style={{height: "400px", width: "400px"}}>
				<GoogleMap
				style={style}
				bootstrapURLKeys={{
					key: 'AIzaSyBERkSwB1_8brGNdcq4kAH-Jbw5P527Kkc',
					language: 'en'
				}}
				defaultCenter={this.state.center}
				defaultZoom={this.state.zoom}
				onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
				onClick={this.grabLocation}
				>
					<div id="container">
						<div id="main-title">
							<h1 id="text-title">Moveable</h1>
							<p onClick={this.selectMemory}>TEST</p>
						</div>
						{this.state.entrySelected ? <SelectedEntry/> : ''}
					</div>	
				</GoogleMap>
			</div>
		)
	}
}

export default App;
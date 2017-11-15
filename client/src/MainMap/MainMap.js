import React, { Component } from 'react';
import './MainMap.css';
import GoogleMap from 'google-map-react';
import {SelectedLocation} from '../SelectedLocation/SelectedLocation.js';
const google = window.google;

export class MainMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			center: {lat: 41.8781, lng: -87.6298},
			zoom: 10,
			enableMarker: false,
			assignNewLocation: false,
			justEnabled: false,
			locations: this.props.locations
		}
	}
	grabLocation = () => {
		google.maps.event.addListener('click', (e) => {
			console.log(e.latLng);
		})
	}
	allowMarker = (e) => {
		console.log(e.currentTarget.innerHTML);
		const state = this.state;
		state.enableMarker = !state.enableMarker;
		state.justEnabled = true;
		this.setState(state);
	}
	renderMarkers = (map, maps) => {
		for (let i = 0; i < this.state.locations.length; i++){
			const marker = new maps.Marker({
				position: {lat: this.state.locations[i].latitude, lng: this.state.locations[i].longitude},
				map,
				title: this.state.locations[i].name
			});
		}
	}
	placeMarker = (e) => {
		if (this.state.enableMarker === true){
			//ensures that a marker is not placed on the map behind the "ADD NEW MARKER" div
			if (this.state.justEnabled === true){
				const state = this.state;
				state.justEnabled = false;
				this.setState(state);
			} else {
				const state = this.state;
				const newLocation = {};
				newLocation.latitude = 41.9;
				newLocation.longitude = -87.7;
				newLocation.name = 'test';
				state.locations.push(newLocation);
				this.setState(state);
				console.log(this.state.locations);
			}
		}
	}
	render() {
		return(
			<div style={{height: "600px", width: "100%"}}>
				<GoogleMap
				resetBoundsOnResize = {true}
				bootstrapURLKeys={{
					key: 'AIzaSyBERkSwB1_8brGNdcq4kAH-Jbw5P527Kkc',
					language: 'en'
				}}
				defaultCenter={this.state.center}
				defaultZoom={this.state.zoom}
				onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
				onClick={this.placeMarker}
				>
					<div id="container">
						<div>
							<p id="marker-define" onClick={this.allowMarker}>ADD NEW MARKER</p>
						</div>
					</div>	
				</GoogleMap>
			</div>
		)
	}
}
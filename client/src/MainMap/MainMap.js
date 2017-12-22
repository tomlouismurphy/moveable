import React, { Component } from 'react';
import './MainMap.css';
import GoogleMap from 'google-map-react';
const google = window.google;
const markerTitles = [];

export class MainMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			center: {lat: 41.8781, lng: -87.6298},
			zoom: 4,
			enableMarker: false,
			assignNewLocation: false,
			justEnabled: false,
			locations: this.props.locations,
			markerSelected: false
		}
	}
	allowMarker = (e) => {
		console.log(e.currentTarget.innerHTML);
		const state = this.state;
		state.enableMarker = !state.enableMarker;
		state.justEnabled = true;
		this.setState(state);
	}
	renderMarkers = (map, maps) => {
		console.log(maps.LatLng);
		console.log(map, maps)
		for (let i = 0; i < this.state.locations.length; i++){
			const marker = new maps.Marker({
				position: {lat: this.state.locations[i].latitude, lng: this.state.locations[i].longitude},
				map: map,
				animation: google.maps.Animation.DROP,
				title: this.state.locations[i].name,
				latitude: this.state.locations[i].latitude,
				longitude: this.state.locations[i].longitude
			});
			marker.addListener('click', () => {
				console.log(this.props);
				map.panTo(marker.getPosition());
				map.setZoom(13);
				const location = marker.title;
				this.props.clickLocation(location);
			})
		}
	}
	placeMarker = (e) => {
		if (this.state.enableMarker === true){
			//ensures that a marker is not placed on the map behind the "ADD NEW MARKER" div when someone clicks that div
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
			<div style={{height: "700px", width: "100%"}}>
				<GoogleMap
				resetBoundsOnResize = {true}
				bootstrapURLKeys={{
					key: 'AIzaSyBERkSwB1_8brGNdcq4kAH-Jbw5P527Kkc',
					libraries: 'geometry',
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
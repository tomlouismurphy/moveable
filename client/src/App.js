import React, { Component } from 'react';
import './App.css';
import GoogleMap from 'google-map-react';
import {SelectedEntry} from './SelectedEntry/SelectedEntry.js';
import {Locations} from './Locations/Locations.js'

class App extends Component {
	constructor() {
		super();
		this.state = {
			center: {lat: 41.8781, lng: -87.6298},
			zoom: 10,
			entrySelected: true,
			locations: [
				{
					lat: 41.9484,
					lng: -87.6553,
					text: 'Wrigley Field'
				},
				{
					lat: 41.8299,
					lng: -87.6338,
					text: 'Guaranteed Rate Field'
				}
			]
		}
	}
	selectMemory = (e) => {
		const state = this.state;
		state.entrySelected = !state.entrySelected;
		this.setState(state);
	}
	renderMarkers(map, maps) {
		for (let i = 0; i < this.state.locations.length; i++){
			let marker = new maps.Marker({
				position: {lat: this.state.locations[i].lat, lng: this.state.locations[i].lng},
				map,
				title: this.state.locations[i].text
			});
		}
	}
	render() {
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
				>
					<div id="container">
						<div id="main-title">
							<h1 id="text-title">Moveable</h1>
							<p onClick={this.selectMemory}>TEST</p>
						</div>
						{this.state.entrySelected ? <SelectedEntry/> : ''}
						<Locations lat={41.9484} lng={-87.6553} text={'A'}/>
					</div>	
				</GoogleMap>
			</div>
		)
	}
}

export default App;
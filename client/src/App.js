import React, { Component } from 'react';
import './App.css';
import GoogleMap from 'google-map-react';
import {SelectedEntry} from './SelectedEntry/SelectedEntry.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			center: {lat: 41.8781, lng: -87.6298},
			zoom: 10,
			entrySelected: true
		}
	}
	selectMemory = (e) => {
		const state = this.state;
		state.entrySelected = !state.entrySelected;
		this.setState(state);
	}
	render() {
		const style = {
			width: '100%',
			height: '100%'
		}
		return(
			<div style={{height: "100%", width: "100%", display: "-webkit=flex"}}>
				<GoogleMap
				style={style}
				bootstrapURLKeys={{
					key: 'AIzaSyBERkSwB1_8brGNdcq4kAH-Jbw5P527Kkc',
					language: 'en'
				}}
				defaultCenter={this.state.center}
				defaultZoom={this.state.zoom}
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
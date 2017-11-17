import React, { Component } from 'react';
import {SelectedLocation} from '../SelectedLocation/SelectedLocation.js';
import './Locations.css';

export class Locations extends Component {
	constructor(props){
		super(props);
		this.state = {
			locations: this.props.locations,
			entrys: this.props.entrys,
			selectedLocation: '',
			locationSelected: false
		}
	}
	assignLocation = (e) => {
		console.log(e.currentTarget.innerHTML);
		const state = this.state;
		state.selectedLocation = e.currentTarget.innerHTML;
		this.setState(state);
		console.log(this.state);
	}
	render() {
		const locationList = this.state.locations.map((item, i) => {
			return <li key={i} className={item.id} onClick={this.assignLocation}>{item.name}</li>
		})
		return(
			<div id='location-container'>
				<h3 id="location-title">Locations</h3>
					<ul className="keystones-list">
						{locationList}
					</ul>
				<SelectedLocation locations={this.state.locations} entrys={this.state.entrys} selectedLocation={this.state.selectedLocation}/>
			</div>
		)
	}
}
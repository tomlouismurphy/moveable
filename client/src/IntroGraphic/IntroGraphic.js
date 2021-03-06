import React, { Component } from 'react';
import './IntroGraphic.css';
import {Locations} from '../Locations/Locations.js';
import {NewLocation} from '../NewLocation/NewLocation.js';

export class IntroGraphic extends Component {
	constructor(props){
		super(props);
		this.state = {
			mainBlurb: true,
			locationSelected: false,
			newLocationScreen: false
		}
	}
	//this is hooked up to onClick functions to return
	//to a sort of home screen for the entries half
	switchToMain = () => {
		const state = this.state;
		state.locationSelected = false;
		state.newLocationScreen = false;
		state.mainBlurb = true;
		this.setState(state);
	}
	//onClick, pulls up the list of all locations
	//that have been entered into the locations table
	switchToLocation = () => {
		const state = this.state;
		state.mainBlurb = false;
		state.newLocationScreen = false;
		state.locationSelected = true;
		this.setState(state);
	}
	//switches from the home screen to a new view
	//where user can add a new location
	switchToNewLocation = () => {
		const state = this.state;
		state.mainBlurb = false;
		state.locationSelected = false;
		state.newLocationScreen = true;
		this.setState(state);
	}
	render() {
		return(
			<div id="right-background">
				{this.state.mainBlurb ?
					<div>
						<p>This is the intro page.</p>
						<button onClick={this.switchToLocation}>View Locations</button><br/>
						<button onClick={this.switchToNewLocation}>Create New Location</button>
					</div>
				:	
					''
				}
				{this.state.locationSelected ?
					<div>
						<Locations locations={this.props.locations} entrys={this.props.entrys} />
						<button onClick={this.switchToMain}>Return</button>
					</div>
				:	
					''
				}
				{this.state.newLocationScreen ?
					<div>
						<NewLocation locations={this.props.locations} addNewLocation={this.props.addNewLocation}/>
						<button onClick={this.switchToMain}>Return</button>
					</div>
				:
					''
				}
			</div>
		)
	}
}
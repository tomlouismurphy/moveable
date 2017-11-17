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
	switchToMain = () => {
		const state = this.state;
		state.locationSelected = false;
		state.newLocationScreen = false;
		state.mainBlurb = true;
		this.setState(state);
	}
	switchToLocation = () => {
		const state = this.state;
		state.mainBlurb = false;
		state.newLocationScreen = false;
		state.locationSelected = true;
		this.setState(state);
	}
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
						<NewLocation addNewLocation={this.props.addNewLocation}/>
						<button onClick={this.switchToMain}>Return</button>
					</div>
				:
					''
				}
			</div>
		)
	}
}
import React, { Component } from 'react';
import './SelectedEntry.css';

export class SelectedEntry extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedLocation: this.props.selectedLocation,
			locationHasEntries: false,
			locations: this.props.locations,
			entrys: this.props.entrys,
			parentLocationId: ''
		}
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.selectedLocation !== nextProps.selectedLocation){
			const state = this.state;
			state.selectedLocation = nextProps.selectedLocation;
			this.setState(state);
			console.log(this.state);
			this.populateEntrys();
		}
	}
	//checks to see if a chosen location has entries
	populateEntrys = () => {
		for (let i = 0; i < this.state.locations.length; i++){
			if (this.state.locations[i].name === this.state.selectedLocation){
				const state = this.state;
				state.parentLocationId = this.state.locations[i].id;
				this.setState(state);
			}
		}
		let ticker = 0;
		for (let i = 0; i < this.state.entrys.length; i++){
			if (this.state.entrys[i].location_id === this.state.parentLocationId){
				ticker++;
			} else {
				;
			}
		}
		if (ticker > 0){
			const state = this.state;
			state.locationHasEntries = true;
			this.setState(state);
		} else {
			const state = this.state;
			state.locationHasEntries = false;
			this.setState(state);
		}
	}
	render() {
		const entryList = this.state.entrys.map((item, i) => {
			if (item.location_id === this.state.parentLocationId){
				return <li key={i}>{item.title}</li>
			}
		})
		return(
			<div id='entry-container'>
				<h4 onClick={this.populateEntrys} id="memory-title">{this.state.selectedLocation}</h4>
				{this.state.locationHasEntries ?
					<div>
						{entryList}
					</div>
				:
					<div>
						<img id="stock-memory-image" src="/../../images/apple-tree.jpg" />
						<p id="stock-memory-description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
						<p id="stock-memory-timestamp">January 1, 2000: 12:01am</p>
					</div>
				}
			</div>
		)
	}
}
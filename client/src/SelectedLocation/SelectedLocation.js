import React, { Component } from 'react';
import './SelectedLocation.css';
import {SelectedEntry} from '../SelectedEntry/SelectedEntry.js';

export class SelectedLocation extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedLocation: this.props.selectedLocation,
			selectedEntry: '',
			entrySelected: false,
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
	assignEntry = (e) => {
		console.log(e.currentTarget.innerHTML);
		const state = this.state;
		state.selectedEntry = e.currentTarget.innerHTML;
		state.entrySelected = true;
		this.setState(state);
		console.log(this.state);
	}
	render() {
		const entryList = this.state.entrys.map((item, i) => {
			if (item.location_id === this.state.parentLocationId){
				return <li className="entry-title" onClick={this.assignEntry} key={i}>{item.title}</li>
			} else {
				return ''
			}
		})
		return(
			<div>
				{this.state.entrySelected ?
					<div>
						<SelectedEntry displayedEntry={this.state.selectedEntry} locations={this.state.locations} entrys={this.state.entrys}/>
					</div>
				:
					<div id='entry-container'>
						<h4 onClick={this.populateEntrys} id="memory-title">{this.state.selectedLocation}</h4>
						{this.state.locationHasEntries ?
							<div>
								{entryList}
							</div>
						:
							<div>
								<img id="stock-memory-image" src="/../../images/openroad.jpg" />
							</div>
						}
					</div>
				}
			</div>
		)
	}
}
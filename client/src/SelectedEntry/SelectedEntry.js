import React, { Component } from 'react';
import './SelectedEntry.css';

export class SelectedEntry extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedLocation: this.props.selectedLocation
		}
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.selectedLocation !== nextProps.selectedLocation){
			const state = this.state;
			state.selectedLocation = nextProps.selectedLocation;
			this.setState(state);
		}
	}
	render() {
		return(
			<div id='entry-container'>
				<h4 id="memory-title">{this.state.selectedLocation}</h4>
				<img id="memory-image" src="/../../images/apple-tree.jpg" />
				<p id="memory-description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				<p id="memory-timestamp">January 1, 2000: 12:01am</p>
			</div>
		)
	}
}
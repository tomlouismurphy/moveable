import React, { Component } from 'react';
import './SelectedEntry.css';

export class SelectedEntry extends Component {
	constructor(props){
		super(props);
		this.state = {
			displayedEntry: this.props.displayedEntry,
			locations: this.props.locations,
			entrys: this.props.entrys
		}
	}
	checkState = () => {
		console.log(this.state);
	}
	render() {
		let entryForPage = '';
		for (let i = 0; i < this.state.entrys.length; i++){
			if (this.state.entrys[i].title === this.state.displayedEntry){
				entryForPage = this.state.entrys[i];
			}
		} 
		return(
			<div id="memory-container">
				<h3>{entryForPage.title}</h3>
				<img id="memory-image" src={entryForPage.image} />
				<p id="memory-description">{entryForPage.description}</p>
				<p id="memory-timestamp">{entryForPage.assignedtime}</p>
			</div>
		)
	}
}
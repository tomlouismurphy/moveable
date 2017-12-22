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
	convertToDate = (timestamp) => {
		const dayOfYear = timestamp.split('T');
		const dayArray = dayOfYear[0].split('-');
		if (dayArray[1] === '01'){
			dayArray[1] = 'January';
		} else if (dayArray[1] === '02'){
			dayArray[1] = 'February';
		} else if (dayArray[1] === '03'){
			dayArray[1] = 'March';
		} else if (dayArray[1] === '04'){
			dayArray[1] = 'April';
		} else if (dayArray[1] === '05'){
			dayArray[1] = 'May';
		} else if (dayArray[1] === '06'){
			dayArray[1] = 'June';
		} else if (dayArray[1] === '07'){
			dayArray[1] = 'July';
		} else if (dayArray[1] === '08'){
			dayArray[1] = 'August';
		} else if (dayArray[1] === '09'){
			dayArray[1] = 'September';
		} else if (dayArray[1] === '10'){
			dayArray[1] = 'October';
		} else if (dayArray[1] === '11'){
			dayArray[1] = 'November';
		} else if (dayArray[1] === '12'){
			dayArray[1] = 'December';
		}
		const readoutDate = dayArray[1] + ' ' + dayArray[2] + ', ' + dayArray[0];
		return readoutDate;
	}
	render() {
		let entryForPage = '';
		for (let i = 0; i < this.state.entrys.length; i++){
			if (this.state.entrys[i].title === this.state.displayedEntry){
				entryForPage = this.state.entrys[i];
				if (entryForPage.assignedtime.length === 24){
					entryForPage.assignedtime = this.convertToDate(entryForPage.assignedtime);
				}
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
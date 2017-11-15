import React, { Component } from 'react';
import {SelectedEntry} from '../SelectedEntry/SelectedEntry.js';
import './SelectedLocation.css';

export class SelectedLocation extends Component {
	render() {
		return(
			<div id='location-container'>
				<h1 id="location-title">title</h1>
				<SelectedEntry/>
			</div>
		)
	}
}
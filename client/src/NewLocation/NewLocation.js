import React, { Component } from 'react';
import './NewLocation.css';

export class NewLocation extends Component {
	constructor(){
		super();
		this.state = {
			name: '',
			latitude: '',
			longitude: ''
		}
	}
	render() {
		return(
			<div id='newlocation-container'>
				<form>
					<input type='text' name='name'/><br/>
					<input type='text' name='latitude'/><br/>
					<input type='text' name='longitude'/><br/>
					<button></button>
				</form>
			</div>
		)
	}
}
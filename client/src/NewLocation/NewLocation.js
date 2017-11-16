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
				<h4>Test</h4>
				<form>
					Name: <input className='input-location' type='text' name='name'/><br/>
					Latitude: <input className='input-location' type='text' name='latitude'/><br/>
					Longitude: <input className='input-location' type='text' name='longitude'/><br/>
					<button>Create</button>
				</form>
			</div>
		)
	}
}
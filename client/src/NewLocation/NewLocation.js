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
	handleInput = (e) => {
		const state = this.state;
		console.log(e.currentTarget.value);
		state[e.currentTarget.name] = e.currentTarget.value;
		this.setState(state);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const newLocation = this.state;
		this.props.addNewLocation(newLocation);
	}
	render() {
		return(
			<div id='newlocation-container'>
				<h4>Test</h4>
				<form id='form-location'>
					Name: <input className='input-location' type='text' name='name' onChange={this.handleInput}/><br/>
					Latitude: <input className='input-location' type='text' name='latitude' onChange={this.handleInput}/><br/>
					Longitude: <input className='input-location' type='text' name='longitude' onChange={this.handleInput}/><br/>
					<button onClick={this.handleSubmit}>Create</button>
				</form>
			</div>
		)
	}
}
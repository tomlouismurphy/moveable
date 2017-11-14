import React, { Component } from 'react';

const locationStyle = {
	position: 'absolute',
	width: 20,
	height: 20,
	left: -10,
	top: -10,
	border: '5px solid black',
	borderRadius: 20,
	backgroundColor: 'white',
	textAlign: 'center',
	color: 'red',
	fontSize: 16,
	fontWeight: 'bold',
	padding: 4
};

export class Locations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			test: 'test',
			locations: this.props.locations
		}
	}
	render(){
		return(
			<div style={locationStyle}>
				{this.state.test}
			</div>
		)
	}
}
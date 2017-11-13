import React, { Component } from 'react';
import './AppScreen.css';
import {MapScreen} from '../MapScreen/MapScreen.js'

export class AppScreen extends Component {
	render() {
		const style = {
			width: '200px',
			height: '200px'
		}
		return(
			<div style={style}>
				<MapScreen/>
			</div>
		)
	}
}
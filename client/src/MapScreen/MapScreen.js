import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export class MapScreen extends Component {
	static defaultProps = {
		center: {lat: 41.8781, lng: -87.6298},
		zoom: 10
	};
	render() {
		const style = {
			width: '200px',
			height: '200px'
		}
		return(
			<div style={{height: "200px", width: "200px", display: "-webkit=flex"}}>
				<GoogleMapReact
				style={style}
				bootstrapURLKeys={{
					key: 'AIzaSyBERkSwB1_8brGNdcq4kAH-Jbw5P527Kkc',
					language: 'en'
				}}
				defaultCenter={this.props.center}
				defaultZoom={this.props.zoom}
				>
				</GoogleMapReact>
			</div>
		)
	}
}
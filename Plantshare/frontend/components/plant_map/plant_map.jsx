import React from 'react';
import ReactDom from 'react-dom';
import { withRouter } from 'react-router';

const _getCoordsObj = latLng => ({
	lat: latLng.lat(),
	lng: latLng.lng()
});

let _mapOptions = {
	center: { lat: 37.7749, lng: 122.4194},
	zoom: 13
};

class PlantMap extends React.Component {

	render() {
		return <div className="map" ref="map">Map</div>;
	}
}

export default withRouter(PlantMap);
import React from 'react';
import { Link, hashHistory } from 'react-router';

import { connect } from 'react-redux';
import { fetchPlant,
         fetchPlants,
         clearPlant,
         updateRequest} from '../../actions/plant_actions';

import PlantDetail from './plant_detail';

const mapStateToProps = ( { plantDetail, session }, ownProps) => {
  let navigation = ownProps.navigation;
  let plantId = navigation.state.params.plant.id;
  let plant = plantDetail;
  let currentUser = session.currentUser;

  let requests = [];

  if (plant.requests){
    requests = Object.keys(plant.requests).map((id) => plant.requests[id]);
  }

  return { plant, requests, currentUser, plantId, navigation };
};

const mapDispatchToProps = dispatch => ({
	fetchPlant: id => dispatch(fetchPlant(id)),
  clearPlant: plant => dispatch(clearPlant(plant)),
  updateRequest: request => dispatch(updateRequest(request))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlantDetail);

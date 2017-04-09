import React from 'react';
import { Link, hashHistory } from 'react-router';

import { connect } from 'react-redux';
import { fetchPlant,
         fetchPlants,
         clearPlant } from '../../actions/plant_actions';

import PlantDetail from './plant_detail';

const mapStateToProps = ( { plantDetail, session }, ownProps) => {
  let navigation = ownProps.navigation;
  let plantId = navigation.state.params.plant.id;
  let plant = plantDetail;
  let currentUser = session.currentUser;

  return { plant, currentUser, plantId, navigation };
};

const mapDispatchToProps = dispatch => ({
	fetchPlant: id => dispatch(fetchPlant(id)),
  clearPlant: plant => dispatch(clearPlant(plant))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlantDetail);

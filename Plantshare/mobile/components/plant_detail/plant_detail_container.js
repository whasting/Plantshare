import React from 'react';
import { Link, hashHistory } from 'react-router';

import { connect } from 'react-redux';
import { fetchPlant, fetchPlants } from '../../actions/plant_actions';

import PlantDetail from './plant_detail';

const mapStateToProps = ( { plantDetail, session }) => {
  let plant = plantDetail;
  let currentUser = session.currentUser;

  return { plant, currentUser };
};

const mapDispatchToProps = dispatch => ({
	fetchPlant: id => dispatch(fetchPlant(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlantDetail);

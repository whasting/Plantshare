import React from 'react';
import { Link, hashHistory } from 'react-router';

import { connect } from 'react-redux';
import { fetchPlant,
        createPlant,
        updatePlant } from '../../actions/plant_actions';

import PlantForm from './plant_form';

const mapStateToProps = ({session, plantDetail}, ownProps) => {
  let navigation = ownProps.navigation;
  let formType = navigation.state.params.formType === "Update" ? "Update" : "Create";
  let plant = plantDetail;
  let currentUser = session.currentUser;


  return {
    formType,
    navigation,
  	plant,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
	createPlant: plant => dispatch(createPlant(plant)),
	updatePlant: plant => dispatch(updatePlant(plant))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlantForm);

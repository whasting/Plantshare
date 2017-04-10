import React from 'react';
import { Link, hashHistory } from 'react-router';

import { connect } from 'react-redux';
import { fetchPlant,
        createRequest,
        createPlant,
        updatePlant } from '../../actions/plant_actions';

import RequestForm from './request_form';

const mapStateToProps = ({session, plantDetail}, ownProps) => {
  let navigation = ownProps.navigation;
  // let formType = navigation.state.params.formType === "Update" ? "Update" : "Create";
  let plant = plantDetail;
  let currentUser = session.currentUser;


  return {
    // formType,
    navigation,
  	plant,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
	createRequest: request => dispatch(createRequest(request)),
	updatePlant: plant => dispatch(updatePlant(plant))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RequestForm);

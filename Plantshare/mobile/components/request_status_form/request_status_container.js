import React from 'react';

import { updateRequest } from '../../actions/plant_actions';

import RequestStatus from './request_status';

const mapStateToProps = ( ownProps) => {
  let plant = ownProps.plant;

  let requests = Object.keys(plant.requests).map((id) => plant.requests[id]);

  return { plant, currentUser, plantId, navigation };
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

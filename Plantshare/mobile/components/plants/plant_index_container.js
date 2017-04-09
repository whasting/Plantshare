import React from 'react';
import { connect } from 'react-redux';
import { fetchPlants, clearPlants } from '../../actions/plant_actions';
import PlantIndex from './plant_index';

const mapStateToProps = ({plantIndex, session}, ownProps) => {
  let plants = Object.keys(plantIndex).map((id) => plantIndex[id]);
  let navigation = ownProps.navigation;
  let currentUserId = session.currentUser.id;
  return { plants, navigation, currentUserId };
};

const mapDispatchToProps = dispatch => ({
  fetchPlants: (data, tabNum) => dispatch(fetchPlants(data, tabNum)),
  clearPlants: plants => dispatch(clearPlants(plants))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlantIndex);

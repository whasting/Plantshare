import { merge } from 'lodash';

import {
    RECEIVE_PLANT,
    RECEIVE_REQUEST,
    CLEAR_PLANT
  } from '../actions/plant_actions';

const defaultPlant = {};

const PlantDetailReducer = (state = defaultPlant, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLANT:
      return merge({}, action.plant);
    case RECEIVE_REQUEST:
      let plant = state;

      plant.requests = state.requests || [];
      plant.requests.push(action.request);
      let newPlant = merge({}, plant);

      return merge({}, action.plant);
    case CLEAR_PLANT:
      return action.plant;
    default:
      return state;
  }
};

export default PlantDetailReducer;

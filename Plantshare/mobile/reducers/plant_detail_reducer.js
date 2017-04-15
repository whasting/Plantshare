import { merge } from 'lodash';

import {
    RECEIVE_PLANT,
    RECEIVE_REQUEST,
    CLEAR_PLANT
  } from '../actions/plant_actions';

const defaultPlant = {
  requests: {}
};

const PlantDetailReducer = (state = defaultPlant, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLANT:
      return merge({}, defaultPlant, action.plant);
    case RECEIVE_REQUEST:
      let plant = state;

      merge(plant.requests, {
        [action.request.id]: action.request
      });

      return merge({}, plant);
    case CLEAR_PLANT:
      return action.plant;
    default:
      return state;
  }
};

export default PlantDetailReducer;

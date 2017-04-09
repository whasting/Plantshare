import { merge } from 'lodash';

import {
    RECEIVE_PLANT,
    CLEAR_PLANT
  } from '../actions/plant_actions';

const defaultPlant = {};

const PlantDetailReducer = (state=defaultPlant, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLANT:
      return merge({}, action.plant);
    case CLEAR_PLANT:
      return action.plant;
    default:
      return state;
  }
};

export default PlantDetailReducer;

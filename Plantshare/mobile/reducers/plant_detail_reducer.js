import { merge } from 'lodash';

import {
    RECEIVE_PLANT,
    RECEIVE_REQUEST,
    CLEAR_PLANT,
    RECEIVE_IMAGES
  } from '../actions/plant_actions';

const defaultPlant = {
  requests: {}
};

const PlantDetailReducer = (state = defaultPlant, action) => {
  Object.freeze(state);
  let newState;
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
      return merge({}, defaultPlant, action.plant);
    case RECEIVE_IMAGES:
      newState = merge({}, state);
      newState['images'] = action.images.photos.photo;
      return newState;
    default:
      return state;
  }
};

export default PlantDetailReducer;

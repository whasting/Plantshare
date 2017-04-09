import { merge } from 'lodash';

import {
    RECEIVE_PLANT
  } from '../actions/plant_actions';

const defaultPlant = {
  title: '',
  description: '',
  instructions: '',
  owner_id: '',
  lat: '',
  lng: '',
  img_url: '',
  requests: {},
  requesters: {}
};

const PlantDetailReducer = (state=defaultPlant, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLANT:
      return merge({}, action.plant);
    default:
      return state;
  }
};

export default PlantDetailReducer;

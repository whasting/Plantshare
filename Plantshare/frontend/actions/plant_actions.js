import * as APIUtil from '../util/plants_api_util';

export const RECEIVE_PLANTS = "RECEIVE_PLANTS";
export const RECEIVE_PLANT = "RECEIVE_PLANT";
export const REMOVE_PLANT = "REMOVE_PLANT";


import { hashHistory } from 'react-router';

export const receivePlants = (plants) => ({
  type: RECEIVE_PLANTS,
  plants
});

export const receivePlant = (plant) => ({
  type: RECEIVE_PLANT,
  plant
});

export const removePlant = (plant) => ({
  type: REMOVE_PLANT,
  plant
});

export const fetchPlants = (data) => dispatch => (
  APIUtil.fetchPlants(data)
    .then(plants => dispatch(receivePlants(plants)))
);

export const fetchPlant = (id) => dispatch => (
  APIUtil.fetchPlant(id)
    .then(_plant => dispatch(receivePlant(_plant)))
);

export const createPlant = (plant) => dispatch => (
  APIUtil.createPlant(plant)
    .then(_plant => dispatch(receivePlant(_plant)))
);

export const updatePlant = (plant) => dispatch => (
  APIUtil.updatePlant(plant)
    .then(_plant => {
      dispatch(receivePlant(_plant));
    })
);

export const deletePlant = (plant) => dispatch => (
  APIUtil.deletePlant(plant.id)
    .then(_plant => {
      dispatch(removePlant(_plant));
      hashHistory.push('/');
    })
);

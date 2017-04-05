import { RECEIVE_PLANTS,
  RECEIVE_PLANT } from '../actions/plant_actions';
import merge from 'lodash/merge';

const PlantIndexReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type){
    case RECEIVE_PLANTS:
      return action.plants;

    case RECEIVE_PLANT:
      let newPlant = {[action.plant.id]: action.plant};
      return merge({}, oldState, newPlant);

    default:
      return oldState;
  }
};

export default PlantIndexReducer;

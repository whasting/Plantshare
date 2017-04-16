import { RECEIVE_PLANTS,
         RECEIVE_PLANT,
         CLEAR_PLANTS } from '../actions/plant_actions';
import merge from 'lodash/merge';

const PlantIndexReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type){
    case RECEIVE_PLANTS:
      return action.plants;
    case CLEAR_PLANTS:
      return action.plants;
    case RECEIVE_PLANT:
      // updates a plant within the plants section of state
      let newPlant = {[action.plant.id]: action.plant};
      return merge({}, oldState, newPlant);
    default:
      return oldState;
  }
};

export default PlantIndexReducer;

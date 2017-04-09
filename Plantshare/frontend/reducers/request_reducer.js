import { merge } from 'lodash';

import {
    RECEIVE_REQUEST,
    RECEIVE_REQUESTS
  } from '../actions/request_actions';

const RequestReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type){
    case RECEIVE_REQUESTS:
      return action.requests;

    case RECEIVE_REQUEST:
      let newRequest = {[action.request.id]: action.request};
      return merge({}, oldState, newRequest);

    default:
      return oldState;
  }
};

export default RequestReducer;

import { RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _emptyErrors = Object.freeze({
  errors: []
});

const ErrorReducer = (state = _emptyErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _emptyErrors, {
        errors
      });
    default:
      return _emptyErrors;
  }
};

export default ErrorReducer;

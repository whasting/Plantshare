import * as APIUtil from '../util/requests_api_util';

export const RECEIVE_REQUESTS = "RECEIVE_REQUESTS";
export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const REMOVE_REQUEST = "REMOVE_REQUEST";


import { hashHistory } from 'react-router';

export const receiveRequests = (requests) => ({
  type: RECEIVE_REQUESTS,
  requests
});

export const receiveRequest = (request) => ({
  type: RECEIVE_REQUEST,
  request
});

export const removeRequest = (request) => ({
  type: REMOVE_REQUEST,
  request
});

export const fetchRequests = (data) => dispatch => (
  APIUtil.fetchRequests(data)
    .then(requests => dispatch(receiveRequests(requests)))
);

export const fetchRequest = (id) => dispatch => (
  APIUtil.fetchRequest(id)
    .then(_request => dispatch(receiveRequest(_request)))
);

export const createRequest = (request) => dispatch => (
  APIUtil.createRequest(request)
    .then(_request => dispatch(receiveRequest(_request)))
);

export const updateRequest = (request) => dispatch => (
  APIUtil.updateRequest(request)
    .then(_request => {
      dispatch(receiveRequest(_request));
    })
);

export const deleteRequest = (request) => dispatch => (
  APIUtil.deleteRequest(request.id)
    .then(_request => {
      dispatch(removeRequest(_request));
      hashHistory.push('/');
    })
);

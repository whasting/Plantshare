import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = (_user) => {
  return fetch('http://10.0.2.2:3000/api/session', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: _user
    })
  }).then(r => {
    return r.json();
  });
};

export const signup = (_user) => {

  return fetch('http://10.0.2.2:3000/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: _user
    })
  }).then(r => {
    return r.json();
  });
};

export const logout = () => {

  return fetch('http://10.0.2.2:3000/api/session', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }}).then(r => {
        return r.json();
    });
};

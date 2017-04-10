export const createRequest = (request) => {

  return fetch('http://10.0.2.2:3000/api/requests', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      request
    })
  }).then(r => {
    return r.json();
  });
};

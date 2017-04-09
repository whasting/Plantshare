

export const fetchPlants = (data = null, tabNum = null) => {
  if (data) {
    switch (tabNum) {
      case 2:
        return fetch(`http://10.0.2.2:3000/api/listings/${data}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }).then(r => r.json());
      case 3:
        return fetch(`http://10.0.2.2:3000/api/requested_plants/${data}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }).then(r => r.json());
    }
  } else {
    return fetch(`http://10.0.2.2:3000/api/plants/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(r => r.json());
  }
};

export const fetchPlant = (id) => {
  return fetch(`http://10.0.2.2:3000/api/plants/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }}).then(r => r.json());
};

export const createPlant = (_plant) => {

  return fetch('http://10.0.2.2:3000/api/plants', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      plant: _plant
    })
  }).then(r => {
    return r.json();
  });
};

export const updatePlant = (_plant) => {

  return fetch(`http://10.0.2.2:3000/api/plants/${_plant.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      plant: _plant
    })
  }).then(r => {
    return r.json();
  });
};

export const deletePlant = id => (
  $.ajax({
    url: `api/plants/${id}`,
    method: 'DELETE'
  })
);

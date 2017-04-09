

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

export const createPlant = (plant) => (
  $.ajax({
    url: `api/plants`,
    method: 'POST',
    data: {plant}
  })
);

export const updatePlant = plant => (
  $.ajax({
    url: `api/plants/${plant.id}`,
    method: 'PATCH',
    data: { plant }
  })
);

export const deletePlant = id => (
  $.ajax({
    url: `api/plants/${id}`,
    method: 'DELETE'
  })
);

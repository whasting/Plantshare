

export const fetchPlants = () => {
  return fetch('http://10.0.2.2:3000/api/plants', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }}).then(r => r.json());
};

export const fetchPlant = (id) => (
  $.ajax({
    url: `api/plants/${id}`
  })
);

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

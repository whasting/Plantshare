export const fetchPlants = (data) => (
  $.ajax({
    url: 'api/plants',
    data
  })
);

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

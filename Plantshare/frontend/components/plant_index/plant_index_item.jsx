import React from 'react';
import { Link } from 'react-router';

const PlantIndexItem = ({ plant, router }) => (
  <li className="plant-index-item">
    <Link to={`/plants/${plant.id}`}>
      <span>{plant.id}</span>
      <img src={plant.image_url} alt={plant.name} />
      <span>{plant.name}</span>
    </Link>
  </li>
);

export default PlantIndexItem;

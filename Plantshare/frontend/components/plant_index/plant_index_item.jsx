import React from 'react';
import { Link, hashHistory } from 'react-router';

const PlantIndexItem = ({ plant, router }) => {
  return (
    <li className="plant-index-item">
      <Link to={`/plants/${plant.id}`}>
        <img src={plant.image_url} alt={plant.name} />
        <span>{plant.title}</span>
      </Link>
    </li>
  );
};

export default PlantIndexItem;

import React from 'react';
import { Link, hashHistory } from 'react-router';

import PlantIndexContainer from './plant_index_container';
import PlantIndexItem from './plant_index_item';

class PlantIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPlants();
  }

  render(){
    return(
      <div className="plant-index-container">
        <h1>Plants!</h1>
        <ul className="plant-index">
          {this.props.plants.map((plant, idx) =>
            <li
              key={idx}
              className="plant-index-item"
              >
              <img></img>
              {plant.title}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default PlantIndex;

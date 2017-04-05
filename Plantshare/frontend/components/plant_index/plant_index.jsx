import React from 'react';
import { Link, hashHistory } from 'react-router';

import PlantIndexContainer from '../plant_index/plant_index_container';

class PlantIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPlants();
  }

  render(){
    return(
      <div>
        <h1>Plants!</h1>
        <ul>
          {this.props.plants.map((plant, idx) =>
            <li key={idx}>{plant.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default PlantIndex;

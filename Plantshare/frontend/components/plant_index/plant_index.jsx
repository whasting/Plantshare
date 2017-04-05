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
      <div>
        <h1>Plants!</h1>
        <ul>
          {this.props.plants.map((plant, idx) =>
            <PlantIndexItem key={idx} plant={plant} />
          )}
        </ul>
      </div>
    );
  }
}

export default PlantIndex;

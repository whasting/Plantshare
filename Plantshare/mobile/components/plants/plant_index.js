import React from 'react';

import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plant_actions';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  Button,
  TouchableHighlight
} from 'react-native';

import PlantIndexItem from './plant_index_item';

class PlantIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPlants();
  }


  render(){
    let backgroundColor;
    return(
      <View className="plant-index-container">
        <View className="plant-index">
          {this.props.plants.map((plant, idx) => {
            if (idx % 2 == 0) {
              //evens
              backgroundColor = '#E8F5E9';
            } else {
              //odds
              backgroundColor = '#DCEDC8';
            }
            return (
              <PlantIndexItem
                key={plant.id}
                plant={plant}
                backgroundColor={backgroundColor} />
              );
            }
          )}
        </View>
      </View>
    );
  }
}

export default PlantIndex;

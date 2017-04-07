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
    return(
      <View className="plant-index-container">
        <Text>Plants!</Text>
        <View className="plant-index">
          {this.props.plants.map((plant, idx) => (
            <PlantIndexItem key={plant.id} plant={plant} />
            )
          )}
        </View>
      </View>
    );
  }
}

export default PlantIndex;

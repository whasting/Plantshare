import React from 'react';
import { Link, hashHistory } from 'react-router';

import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plant_actions';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Button,
  TouchableHighlight
} from 'react-native';

class PlantIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPlants();
  }

  render(){
    console.log(this.props);
    return(
      <View className="plant-index-container">
        <Text>Plants!</Text>
        <View className="plant-index">
          {this.props.plants.map((plant, idx) =>
            <Text
              key={idx}
              className="plant-index-item"
              >
              {plant.title}
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({plantIndex, session}) => {
  let plants = Object.keys(plantIndex).map((id) => plantIndex[id]);
  return { plants };
};

const mapDispatchToProps = dispatch => ({
  fetchPlants: () => dispatch(fetchPlants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlantIndex);

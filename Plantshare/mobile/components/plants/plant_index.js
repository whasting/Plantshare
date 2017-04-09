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

    this.state = { activeTab: 1 };
    this.handlePress = this.handlePress.bind(this);
    this.getTabStyle = this.getTabStyle.bind(this);
  }

  componentDidMount(){
    this.props.fetchPlants();
  }

  handlePress(tabNum) {
    this.setState({ activeTab: tabNum });
  }

  getTabStyle(tabNum) {
    if (this.state.activeTab === tabNum) {
      return styles.activeButton;
    } else {
      return styles.button;
    }
  }

  render(){
    let backgroundColor;
    return(
      <View
        className="plant-index-container"
        style={{flex: 1}}>
          <View
            className="plant-index-tabs"
            style={{
              flex: 0.1,
              justifyContent: 'space-around',
              flexDirection: 'row'}}>
            <TouchableHighlight
              style={this.getTabStyle(1)}
              onPress={() => this.handlePress(1)}>
              <Text style={styles.tabText}>Plants</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={this.getTabStyle(2)}
              onPress={() => this.handlePress(2)}>
              <Text style={styles.tabText}>Listings</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={this.getTabStyle(3)}
              onPress={() => this.handlePress(3)}>
              <Text style={styles.tabText}>Requests</Text>
            </TouchableHighlight>
          </View>
        <View
          className="plant-index"
          style={{flex: 1}}>
          {this.props.plants.map((plant, idx) => {
            if (idx % 2 == 0) {
              //evens
              backgroundColor = '#E8F5E9';
            } else {
              //odds
              // backgroundColor = '#DCEDC8';
              backgroundColor = '#f4faec';
            }
            return (
              <PlantIndexItem
                key={plant.id}
                plant={plant}
                backgroundColor={backgroundColor}
                navigation={this.props.navigation}/>
              );
            }
          )}
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#43A047',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.5,
    borderRightColor: '#388E3C',
    borderLeftWidth: 0.5,
    borderLeftColor: '#388E3C'
  },
  activeButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.5,
    borderRightColor: '#388E3C',
    borderLeftWidth: 0.5,
    borderLeftColor: '#388E3C'
  },
  tabText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default PlantIndex;

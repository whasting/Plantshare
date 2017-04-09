import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Button,
  TouchableHighlight
} from 'react-native';

class PlantDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlant(this.props.plantId);
  }

  render() {
    const plant = this.props.plant;
    console.log(plant);
    let form = "";

    // if(plant){
    //   form = this.props.currentUser.id === plant.owner_id ? <ModalForm plant={plant}/> : "";
    // }

    return (
      <View style={styles.container}>
        <Text>A Plant</Text>
        <Text>{plant.title}</Text>
        <Text>Description: {plant.description}</Text>
        <Text>Care Instruction: {plant.instructions}</Text>
        <Text>Where Google Map goes...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default PlantDetail;

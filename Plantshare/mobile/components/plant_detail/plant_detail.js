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
    let form = "";
    const { navigate } = this.props.navigation;

    if(plant){
      const button = (<Button onPress={() => navigate('Form', { plant: plant , formType: "Update"})} title="Edit!" />);
      form = this.props.currentUser.id === plant.owner_id ? button : <Text></Text>;
    }

    return (
      <View style={styles.container}>
        <Button
           onPress={() => navigate('Index')}
           title="Back to Index!"
         />
        <Text>A Plant</Text>
        <Text>{plant.title}</Text>
        <Text>Description: {plant.description}</Text>
        <Text>Care Instruction: {plant.instructions}</Text>
        <Text>Where Google Map goes...</Text>
        <View>{form}</View>
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

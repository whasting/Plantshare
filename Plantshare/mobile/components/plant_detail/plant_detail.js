import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
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
    let plantImg = <Text>""</Text>;
    if (plant.img_url) {
      plantImg = (
        <Image
          style={styles.plant_image}
          source={{uri: plant.img_url}}
          className="plant-index-image" />
      );
    }

    // if(plant){
    //   form = this.props.currentUser.id === plant.owner_id ? <ModalForm plant={plant}/> : "";
    // }

    return (
      <View style={styles.container}>
        <Text
          style={styles.title}>
          {plant.title}
        </Text>
        {plantImg}
        <View
          style={{
            width: 150,
            alignSelf: 'center'}}>
          <Button
            onPress={() => console.log("hello")}
            color='#4CAF50'
            title='Request'/>
        </View>
        <Text>Description: {plant.description}</Text>
        <Text>Care Instruction: {plant.instructions}</Text>
        <Text>Where Google Map goes...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F5E9',
    flex: 1
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  plant_image: {
    height: 175,
    width: 175,
    borderColor: 'transparent',
    borderWidth: 0.5,
    borderRadius: 100,
    marginTop: 15,
    marginBottom: 15,
    alignSelf: 'center'
  }
});

export default PlantDetail;

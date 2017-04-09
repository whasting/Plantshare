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

  componentWillUnmount() {
    this.props.clearPlant({});
  }

  render() {
    const plant = this.props.plant;
    let form = "";
    let plantImg = <Text></Text>;
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

    if (Object.keys(plant).length) {
      return (
        <View style={styles.container}>
          <Text
            style={styles.title}>
            {plant.title}
          </Text>
          {plantImg}
          <View
            style={styles.requestButton}>
            <Button
              onPress={() => console.log("hello")}
              color='#4CAF50'
              title='Request'/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.descriptionTitle}>Info:</Text>
            <Text style={styles.descriptionText}>{plant.description}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.careTitle}>Care:</Text>
            <Text style={styles.careText}>{plant.instructions}</Text>
          </View>
        </View>
      );
    } else {
      return <Text></Text>;
    }
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
  },
  textContainer: {
    marginTop: 15,
    marginBottom: 10,
    marginRight: 38,
    marginLeft: 38
  },
  requestButton: {
    width: 150,
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 15
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  descriptionText: {
    fontSize: 20
  },
  careTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  careText: {
    fontSize: 20
  }
});

export default PlantDetail;

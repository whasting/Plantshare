import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  Button,
  TouchableHighlight,
  ScrollView
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

    let plant_requesters = <View></View>;

    if(plant.requesters){

      let requesters = Object.keys(plant.requesters).map((id) => plant.requesters[id]);

      plant_requesters = (<View>
        {requesters.map((requester) => (
          <View style={styles.textContainer}>
            <Text style={styles.descriptionTitle}>Requester: {requester.username}</Text>
          </View>
        ))}
      </View>);
    }

    const { navigate } = this.props.navigation;

    let plantImg = <Text></Text>;
    if (plant.img_url) {
      plantImg = (
        <Image
          style={styles.plant_image}
          source={{uri: plant.img_url}}
          className="plant-index-image" />
      );
    }

    // <Button
    //    onPress={() => navigate('Index')}
    //    title="Back to Index!"
    //  />

    if(plant){
      const editButton = (
        <Button
          onPress={() => navigate('Form', { plant: plant , formType: "Update"})}
          color='#4CAF50'
          title="Edit!" />
      );

      const requestButton = (
        <Button
          onPress={() => navigate('RequestForm', { plant: plant })}
          color='#4CAF50'
          title='Request'/>
      );


      form = this.props.currentUser.id === plant.owner_id ? editButton : requestButton;
    }

    if (Object.keys(plant).length) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.container}>
            <Text
              style={styles.title}>
              {plant.title}
            </Text>
            {plantImg}
            <View
              style={styles.requestButton}>
              {form}
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.descriptionTitle}>Info:</Text>
              <Text style={styles.descriptionText}>{plant.description}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.careTitle}>Care:</Text>
              <Text style={styles.careText}>{plant.instructions}</Text>
            </View>
            {plant_requesters}
          </View>
        </ScrollView>
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

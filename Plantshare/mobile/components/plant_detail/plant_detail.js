import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  Button,
  Picker,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import RequestStatus from '../request_status_form/request_status';

class PlantDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchPlant(this.props.plantId);
  }

  componentWillUnmount() {
    this.props.clearPlant(null);
  }

  render() {
    let plant = this.props.plant;
    let requests = this.props.requests;

    let form = "";

    let plantRequests = <View></View>;

    if (requests && this.props.currentUser.id === plant.owner_id) {

      plantRequests = (
        <RequestStatus
          plant={plant}
          requests={requests}
          updateRequest={this.props.updateRequest}
          />
      );
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

    if(plant){
      const editButton = (
        <Button
          onPress={() => navigate('Form', { plant: plant , formType: "Update"})}
          color='#FF9800'
          title="Edit" />
      );

      const requestButton = (
        <Button
          onPress={() => navigate('RequestForm', { plant: plant })}
          color='#4CAF50'
          title='Request'/>
      );

      let currentUserRequest = requests.find((req) => {
        return req.user.id === this.props.currentUser.id;
      });

      form = this.props.currentUser.id === plant.owner_id ? editButton : requestButton;

      if(currentUserRequest){
        form = <Text
          style={styles.descriptionTitle}>Status: {currentUserRequest.status}</Text>;
      }

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
            {plantRequests}
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

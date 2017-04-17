import React from 'react';

import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class PlantIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.backgroundColor = this.props.backgroundColor;
    this.renderRequests = this.renderRequests.bind(this);
  }

  renderRequests() {
    let plant = this.props.plant;
    if (plant.request_ids) {
      return (
        <Text style={styles.index_item_text}>
          {plant.request_ids.length} requests
        </Text>
      );
    }
  }

  render() {
    let plant = this.props.plant;
    const { navigate } = this.props.navigation;

    let user = <Text></Text>;
    if (plant.user) {
      let username = plant.user.username;
      user = (
      <Text style={styles.index_item_text}>
        Created by {username.charAt(0).toUpperCase() + username.slice(1)}
      </Text>
      );
    }

    styles.index_item.backgroundColor = this.backgroundColor;
    return (
      <TouchableHighlight
        onPress={() => navigate('Detail', { plant: plant })}>
        <View
          style={
            [styles.index_item,
            {backgroundColor: this.backgroundColor}]}
          className="plant-index-item">
          <View className="plant-index-text-container">
            <Text style={styles.index_item_title}>
              {plant.title}
            </Text>
            {user}
            {this.renderRequests()}
          </View>
          <Image
            style={styles.plant_image}
            source={{uri: plant.img_url}}
            className="plant-index-image" />
        </View>
      </TouchableHighlight>
    );
  }
}

let styles = StyleSheet.create({
  index_item: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5
  },
  index_item_title: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  index_item_text: {
    fontSize: 16,
    marginLeft: 10,
  },
  plant_image: {
    height: 70,
    width: 70,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 15
  }
});

export default PlantIndexItem;

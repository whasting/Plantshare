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

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    console.log("HI");
    console.log(this.props.plant.id);
  }

  render() {
    let plant = this.props.plant;
    return (
      <TouchableHighlight
        onPress={() => console.log(plant.id)}>
        <View
          style={styles.index_item}
          className="plant-index-item">
          <Image
            style={styles.plant_image}
            source={{uri: plant.img_url}}
            className="plant-index-image" />
          <View className="plant-index-text-container">
            <Text style={styles.index_item_text}>
              {plant.title}
            </Text>
            <Text>
              {plant.description}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  index_item: {
    backgroundColor: '#E8F5E9',
    flex: 0,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5
  },
  index_item_text: {
    'fontSize': 20,
    'textAlign': 'center',
    'margin': 10,
  },
  plant_image: {
    height: 75,
    width: 75,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 15
  }
});

export default PlantIndexItem;

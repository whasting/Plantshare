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
        <View className="plant-index-item">
          <Image
            style={{height: 100, width: 100}}
            source={{uri: plant.img_url}}
            className="plant-index-image" />
          <View className="plant-index-text-container">
            <Text className="plant-index-title">
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
    flex: 1,
    justifyContent: 'center',
  },
  index_item_text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default PlantIndexItem;

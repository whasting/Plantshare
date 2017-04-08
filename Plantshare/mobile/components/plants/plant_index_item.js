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
    'backgroundColor': '#527FE4',
    'marginBottom': 5,
    flex: 0,
    flexDirection: 'row'
  },
  index_item_text: {
    'fontSize': 20,
    'textAlign': 'center',
    'margin': 10,
  },
  plant_image: {
    height: 100,
    width: 100,
    borderColor: 'rgba(0, 0, 0, .25)',
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 15
  }
});

export default PlantIndexItem;

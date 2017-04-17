import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Navigator,
  Button,
  TouchableHighlight,
  ScrollView
} from 'react-native';

class PlantForm extends React.Component {
  constructor(props){
    super(props);

    if(this.props.formType === "Update"){
      this.state = this.props.plant;
    } else {
      this.state = {
        title: "",
        description: "",
        instructions: "",
        lng: "",
        lat: "",
        img_url: "http://res.cloudinary.com/whasting/image/upload/v1492407757/fireflower_ewvoqj.jpg",
        start_time: "",
        end_time: "",
        query: ""
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.searchFlickr = this.searchFlickr.bind(this);
    this.renderImageUrl = this.renderImageUrl.bind(this);
    this.generateImage = this.generateImage.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { navigate } = this.props.navigation;
		if (nextProps.plant.id !== this.props.plant.id){
      this.props = nextProps;
      navigate('Index', { plant: nextProps.plant });
    }
	}

  searchFlickr() {
    if (this.state.title !== "" && this.state.title !== this.state.query) {
      this.props.fetchImages(this.state.title)
        .then(() => this.renderImageUrl())
        .then(imgUrl => this.setState({img_url: imgUrl}))
        .then(() => this.setState({query: this.state.title}));
    } else if (this.state.title === "") {
      this.props.fetchImages("plant")
        .then(() => this.renderImageUrl())
        .then(imgUrl => this.setState({img_url: imgUrl}))
        .then(() => this.setState({query: "plant"}));
    } else {
      this.setState({img_url: this.renderImageUrl()});
    }
  }

  generateImage() {
    this.searchFlickr();
  }

  renderSubmitButton() {
    if (this.props.formType === "Update") {
      return (
        <Button
          color="#FF9800"
          onPress={this.handleSubmit}
          title="update"/>
      );
    } else {
      return (
        <Button
          color="#4CAF50"
          onPress={this.handleSubmit}
          title="create"/>
      );
    }
  }

  renderImageUrl() {
    if (this.props.plant.images) {
      let photoIdx = Math.floor(Math.random() * this.props.plant.images.length);
      let image = this.props.plant.images[photoIdx];
      let farmId = image.farm;
      let serverId = image.server;
      let photoId = image.id;
      let secretId = image.secret;
      return (
        `https://farm${farmId}.staticflickr.com/${serverId}/${photoId}_${secretId}.jpg`
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const plant = this.state;
    const { navigate } = this.props.navigation;

    if (this.props.formType === "Update") {
      this.props.updatePlant( plant );
      navigate("Index",  {plant});
    } else {
      plant.owner_id = this.props.currentUser.id;
      this.props.createPlant( plant )
        .then(newPlant => navigate('Index', { plant: newPlant }));
    }

  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.labelPlant}>Type of Plant</Text>
  				<TextInput
  					onChangeText={(title) => this.setState({ title })}
          	value={this.state.title}
            style={styles.typePlant}
  				/>
        <Text style={styles.labelInput}>Image Preview</Text>
        <View style={styles.imagePreview}>
            <View style={{flex: 1}}>
              <Image
                source={{uri: `${this.state.img_url}`}}
                style={styles.plant_image} />
            </View>
            <View style={{marginRight: 20}}>
              <Button
                onPress={this.generateImage}
                title="Generate Image From Title"/>
            </View>
          </View>
          <Text style={styles.labelInput}>Brief description</Text>
  				<TextInput
  					onChangeText={description => this.setState({ description })}
          	value={this.state.description}
            multiline = {true}
            numberOfLines = {4}
            style={styles.inputBox}
  				/>
          <Text style={styles.labelInput}>Instructions</Text>
  				<TextInput
  					onChangeText={instructions => this.setState({ instructions })}
          	value={this.state.instructions}
            multiline = {true}
            numberOfLines = {4}
            style={styles.inputBox}
  				/>
          <View style={styles.createButton}>
            {this.renderSubmitButton()}
          </View>
        </ScrollView>
			</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F5E9',
    flex: 1
  },
  labelPlant: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  labelInput: {
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  typePlant: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 0,
    padding: 4
  },
  inputBox: {
    backgroundColor: 'white',
    fontSize: 18,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    textAlign: 'left',
    textAlignVertical: 'top',
    paddingLeft: 20,
    paddingRight: 20
  },
  createButton: {
    alignSelf: 'center',
    width: 150,
    marginTop: 10,
    marginBottom: 20
  },
  imagePreview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  plant_image: {
    flex: 0.2,
    height: 70,
    width: 70,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 45
  }
});

export default PlantForm;

import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator,
  Button,
  TouchableHighlight
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
        img_url: "",
        start_time: "",
        end_time: ""
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { navigate } = this.props.navigation;
		if(nextProps.plant.id !== this.props.plant.id){
      this.props = nextProps;
      navigate('Detail', { plant: nextProps.plant });
    }
	}

  handleSubmit(e) {
    e.preventDefault();
    const plant = this.state;
    const { navigate } = this.props.navigation;

    if(this.props.formType === "Update"){
      this.props.updatePlant( plant );
      navigate("Detail",  {plant});
    } else {
      plant.owner_id = this.props.currentUser.id;
      this.props.createPlant( plant );
    }

  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelPlant}>Type of Plant</Text>
				<TextInput
					onChangeText={(title) => this.setState({ title })}
        	value={this.state.title}
          style={styles.typePlant}
				/>
        <Text style={styles.labelInput}>Brief description</Text>
				<TextInput
					onChangeText={(description) => this.setState({ description })}
        	value={this.state.description}
          multiline = {true}
          numberOfLines = {4}
          style={styles.inputBox}
				/>
        <Text style={styles.labelInput}>Instructions</Text>
				<TextInput
					onChangeText={(instructions) => this.setState({ instructions })}
        	value={this.state.instructions}
          multiline = {true}
          numberOfLines = {4}
          style={styles.inputBox}
				/>
        <View style={styles.createButton}>
          <Button
            color="#4CAF50"
            onPress={this.handleSubmit}
            title="create!"/>
        </View>
			</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F5E9'
  },
  labelPlant: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  labelInput: {
    fontSize: 18,
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
    height: 30,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 0,
  },
  inputBox: {
    backgroundColor: 'white',
    fontSize: 18,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    textAlign: 'center'
  },
  createButton: {
    alignSelf: 'center',
    width: 150,
  }
});

export default PlantForm;

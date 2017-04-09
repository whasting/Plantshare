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

    if(this.props.formType === "Update"){
      this.props.updatePlant( plant );
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
      <View>
				<TextInput
          placeholder="Type of Plant"
					onChangeText={(title) => this.setState({ title })}
        	value={this.state.title}
				/>
				<TextInput
          placeholder="Brief description"
					onChangeText={(description) => this.setState({ description })}
        	value={this.state.description}
          multiline = {true}
          numberOfLines = {4}
				/>
				<TextInput
          placeholder="Instructions"
					onChangeText={(instructions) => this.setState({ instructions })}
        	value={this.state.instructions}
          multiline = {true}
          numberOfLines = {4}
				/>
        <Button onPress={this.handleSubmit}  title="create!"/>
			</View>

    );
  }
}

export default PlantForm;

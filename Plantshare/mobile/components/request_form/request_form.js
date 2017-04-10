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

class RequestForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comment: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const request = this.state;
    const {  navigate } = this.props.navigation;

    request.user_id = this.props.currentUser.id;
    request.plant_id = this.props.plant.id;
    request.state = "pending";
    this.props.createRequest( request );

    navigate('Index');

  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    // debugger;
    return (
      <View>
				<TextInput
          placeholder="Brief description"
					onChangeText={(comment) => this.setState({ comment })}
        	value={this.state.comment}
          multiline = {true}
          numberOfLines = {4}
				/>
        <Button onPress={this.handleSubmit}  title="create!"/>
			</View>

    );
  }
}

export default RequestForm;

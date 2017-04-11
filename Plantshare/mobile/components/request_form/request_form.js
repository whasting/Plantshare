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
      <View style={styles.container}>
        <Text style={styles.requestTitle}>
          Request Plant
        </Text>
				<TextInput
          placeholder="Comment"
					onChangeText={(comment) => this.setState({ comment })}
        	value={this.state.comment}
          multiline = {true}
          numberOfLines = {4}
          style={styles.commentBox}
				/>
      <View style={styles.submitButton}>
          <Button
            onPress={this.handleSubmit}
            title="Submit"
            color="#4CAF50"/>
        </View>
			</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F5E9'
  },
  requestTitle: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  commentBox: {
    backgroundColor: 'white',
    fontSize: 18,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    textAlign: 'center'
  },
  submitButton: {
    width: 150,
    alignSelf: 'center'
  }
});

export default RequestForm;

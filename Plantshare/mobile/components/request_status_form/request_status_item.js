import React from 'react';

import {
  View,
  Image,
  Text,
  Picker,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class RequestStatusItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { status: this.props.request.status };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(new_status){
    let request = this.props.request;
    this.setState({status: new_status});

    request.status = new_status;

    this.props.updateRequest(request);
  }

  render(){
    let request = this.props.request;

    return (
      <View key={request.id} style={styles.textContainer}>
        <Text
          style={styles.descriptionTitle}>

          User: {request.user.username}
        </Text>

        <Text
          style={styles.descriptionTitle}>

          Status: {request.status}
        </Text>

        <Picker
          selectedValue={this.state.status}
          onValueChange={(new_status) => this.handleUpdate(new_status)}>
          <Picker.Item label="Approve" value="approved" />
          <Picker.Item label="Deny" value="denied" />
        </Picker>
      </View>
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

export default RequestStatusItem;

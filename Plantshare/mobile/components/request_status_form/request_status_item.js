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
      <View key={request.id} style={styles.index_item}>
        <Text
          style={styles.index_item_user}>

          User: {request.user.username}
        </Text>

        <Text
          style={styles.index_item_comment}>

          comnt: {request.comment.substring(0, 30)}...
        </Text>

        <Picker
          style={styles.picker}
          selectedValue={this.state.status}
          onValueChange={(new_status) => this.handleUpdate(new_status)}
          mode="dropdown">
          <Picker.Item label="  Approve" value="approved" />
          <Picker.Item label="  Deny" value="denied" />
        </Picker>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  index_item: {
    flex: 0,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5
  },
  index_item_user: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    width: 100,
  },
  index_item_comment: {
    fontSize: 14,
    // marginLeft: 10,
    width: 120,
  },
  picker: {
    backgroundColor: '#396631',
    color: 'white',
    marginLeft: 10,
    width: 100,
    // paddingBottom: 5, ~
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

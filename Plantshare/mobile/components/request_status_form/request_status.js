import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Navigator,
  Button,
  TouchableHighlight
} from 'react-native';

import RequestStatusItem from './request_status_item';

class RequestStatus extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <View>{ this.props.requests.map((request, idx) => {

          return (
            <RequestStatusItem
              key={idx}
              request={request}
              updateRequest={this.props.updateRequest} />
          );

        })
      }</View>

    );
  }

}

export default RequestStatus;

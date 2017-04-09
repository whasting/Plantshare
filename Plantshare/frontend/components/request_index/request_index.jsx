import React from 'react';
import { Link, hashHistory } from 'react-router';

import RequestIndexContainer from './request_index_container';
import RequestIndexItem from './request_index_item';

class RequestIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchRequests();
  }

  componentWillReceiveProps(newProps){
    if(newProps.requests !== this.props.requests){
      this.props = newProps;
    }
  }

  render(){
    return(
      <div className="request-index-container">
        <h1>Requests:</h1>

        <ul className="request-index">
          {this.props.requestItems.map((request) =>
            this.props.requesters.map((requester, idx) =>
              <RequestIndexItem key={idx} request={request}
                requester={requester}
                updateRequest={this.props.updateRequest}/>
            ))}
        </ul>
      </div>
    );
  }
}

export default RequestIndex;

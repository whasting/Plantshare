import React from 'react';
import { Link, hashHistory } from 'react-router';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps){
    if(!newProps.currentUser){
      hashHistory.replace('/login');
    }
  }

  render(){
    if(this.props.currentUser){
      return(
        <div>
          <h1>Plants go here!</h1>
          <button onClick={() => this.props.logout()}>Log Out</button>
        </div>
      );
    } else {
      return(
        <div>
          <h1>Welcome to Plantshare ... You shouldn't be seeing this</h1>
        </div>
      );
    }
  }
}

export default Home;

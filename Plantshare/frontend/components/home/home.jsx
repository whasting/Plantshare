import React from 'react';
import { Link, hashHistory } from 'react-router';

import PlantIndexContainer from '../plant_index/plant_index_container';

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
          <button onClick={() => this.props.logout()}>Log Out</button>
          <PlantIndexContainer />

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

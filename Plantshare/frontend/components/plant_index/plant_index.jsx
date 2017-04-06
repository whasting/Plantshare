import React from 'react';
import { Link, hashHistory } from 'react-router';

import PlantIndexContainer from './plant_index_container';
import PlantIndexItem from './plant_index_item';
import ModalForm from '../modal_form/modal_form';

class PlantIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {tab: 1};

    this.currentTab = this.currentTab.bind(this);
    this.handleAllPlants = this.handleAllPlants.bind(this);
    this.handleOwnerPlants = this.handleOwnerPlants.bind(this);
    this.handleRequestPlants = this.handleRequestPlants.bind(this);
  }

  componentDidMount(){
    this.props.fetchPlants();
  }

  componentWillReceiveProps(newProps){
    if(newProps.plants !== this.props.plants){
      this.props = newProps;
    }
  }

  handleAllPlants(e){
    e.preventDefault();
    this.props.fetchPlants();
    this.setState({tab: 1});
  }

  handleOwnerPlants(e){
    e.preventDefault();
    this.props.fetchPlants({owners_plants: this.props.currentUser.id});
    this.setState({tab: 2});
  }

  handleRequestPlants(e){
    e.preventDefault();
    this.props.fetchPlants({request_plants: this.props.currentUser.id});
    this.setState({tab: 3});
  }

  currentTab(key){
    return this.state.tab === key ? "active" : "";
  }

  render(){
    return(
      <div className="plant-index-container">
        <h1>Plants!</h1>

        <div className="plant-tab-buttons">
          <button onClick={this.handleAllPlants}
            className={this.currentTab(1)}>All Plants</button>

          <button onClick={this.handleOwnerPlants}
            className={this.currentTab(2)}>Your Plants</button>

          <button onClick={this.handleRequestPlants}
            className={this.currentTab(3)}>Your Requested Plants</button>
        </div>

        <ModalForm />

        <ul className="plant-index">
          {this.props.plants.map((plant, idx) =>
            <PlantIndexItem key={idx} plant={plant}/>
          )}
        </ul>
      </div>
    );
  }
}

export default PlantIndex;

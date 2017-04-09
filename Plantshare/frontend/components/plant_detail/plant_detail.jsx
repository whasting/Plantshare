import React from 'react';
import ModalForm from '../modal_form/modal_form';
import RequestModalForm from '../modal_form/request_modal_form';
import RequestIndexContainer from '../request_index/request_index_container';

class PlantDetail extends React.Component {
  
  componentDidMount() {
    this.props.fetchPlant(this.props.params.id);
  }

  render() {
    const plant = this.props.plantDetail;

    let form = "";

    if(plant){
      form = this.props.currentUser.id === plant.owner_id ? 
        <ModalForm plant={plant}/> : <RequestModalForm plantId={plant.id}/>;
    }

    return (
      <div className="plant-detail">
        <ul>
          <li><h2>
            {plant.title}
            <button>Edit</button>
          </h2></li>
          <li>Description: {plant.description}</li>
          <li>Care Instruction: {plant.instructions}</li>
          <li>Where Google Map goes...</li>
        </ul>

        {form}
        <br />
        <div className="request-list">
          <RequestIndexContainer />
        </div>
      </div>
    );
  }
}

export default PlantDetail;

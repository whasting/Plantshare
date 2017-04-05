import React from 'react';

class PlantDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPlant(this.props.params.id);
  }

  render() {
    const { plantDetail } = this.props;
    return (
      <div className="plant-detail">
        <ul>
          <li><h2>
            {plantDetail.title}
            <button>Edit</button>
          </h2></li>
          <li>Description: {plantDetail.description}</li>
          <li>Care Instruction: {plantDetail.instructions}</li>
          <li>Where Google Map goes...</li>
        </ul>
      </div>
    );
  }
}

export default PlantDetail;

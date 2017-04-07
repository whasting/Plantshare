import React from 'react';

import { connect } from 'react-redux';
import PlantDetail from './plant_detail';
import { fetchPlant } from '../../actions/plant_actions';

class PlantDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPlant(this.props.params.id);
  }

  render() {
    const { plantDetail } = this.props;
    return (
      <View className="plant-detail">

        <Text>
          {plantDetail.title}
        </Text>

        <Text>Description: {plantDetail.description}</Text>
        <Text>Care Instruction: {plantDetail.instructions}</Text>
        <Text>Where Google Map goes...</Text>
      </View>
    );
  }
}

const mapStateToProps = ( { plantDetail }) => ({
	plantDetail
});

const mapDispatchToProps = dispatch => ({
	fetchPlant: id => dispatch(fetchPlant(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlantDetail);

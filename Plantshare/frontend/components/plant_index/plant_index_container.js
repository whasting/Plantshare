import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plant_actions';
import PlantIndex from './plant_index';

const mapStateToProps = ({plantIndex}) => {
  let plants = Object.keys(plantIndex).map((id) => plantIndex[id]);
  return { plants };
};

const mapDispatchToProps = dispatch => ({
  fetchPlants: () => dispatch(fetchPlants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlantIndex);

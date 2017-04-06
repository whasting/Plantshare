import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plant_actions';
import PlantIndex from './plant_index';

const mapStateToProps = ({plantIndex, session}) => {
  let currentUser = session.currentUser;
  let plants = Object.keys(plantIndex).map((id) => plantIndex[id]);
  return { plants, currentUser };
};

const mapDispatchToProps = dispatch => ({
  fetchPlants: (data) => dispatch(fetchPlants(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlantIndex);

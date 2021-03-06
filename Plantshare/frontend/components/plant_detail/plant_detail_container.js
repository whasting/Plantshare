import { connect } from 'react-redux';
import PlantDetail from './plant_detail';
import { fetchPlant } from '../../actions/plant_actions';

const mapStateToProps = ( { plantDetail, session }) => ({
	currentUser: session.currentUser,
	plantDetail
});

const mapDispatchToProps = dispatch => ({
	fetchPlant: id => dispatch(fetchPlant(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlantDetail);

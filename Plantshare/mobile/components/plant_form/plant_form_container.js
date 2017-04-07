import { connect } from 'react-redux';
import PlantForm from './plant_form';
import { createPlant, updatePlant } from '../../actions/plant_actions';

const mapStateToProps = ({session}, ownProps) => {
  let formType = ownProps.plant ? "Update" : "Create";

  return {
    formType,
  	plant: ownProps.plant,
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
	createPlant: id => dispatch(createPlant(id)),
	updatePlant: id => dispatch(updatePlant(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlantForm);

import { connect } from 'react-redux';
import RequestForm from './request_form';
import { createRequest, updateRequest } from '../../actions/request_actions';

const mapStateToProps = ({session}, ownProps) => {
  let formType = ownProps.request ? "Update" : "Create";

  return {
    formType,
  	request: ownProps.request,
    plantId: ownProps.plantId,
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
	createRequest: request => dispatch(createRequest(request)),
	updateRequest: id => dispatch(updateRequest(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RequestForm);

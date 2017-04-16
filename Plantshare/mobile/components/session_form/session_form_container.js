import { connect } from 'react-redux';
import { login, logout, signup, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }, ownProps) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    navigation: ownProps.navigation
  };
};

const mapDispatchToProps = (dispatch, { location }) => {

  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

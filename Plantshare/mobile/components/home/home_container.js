import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = ({session}) => {
  let currentUser = null;
  if(session.currentUser){
    currentUser = session.currentUser;
  }
  return { currentUser };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

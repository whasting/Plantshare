import { connect } from 'react-redux';
import { fetchRequests } from '../../actions/request_actions';
import RequestIndex from './request_index';

const mapStateToProps = ({plantDetail, session}) => {
  let currentUser = session.currentUser;
  let requestItems = Object.keys(plantDetail.requests)
    .map(id => plantDetail.requests[id]);
  let requesters = Object.keys(plantDetail.requesters)
    .map(id => plantDetail.requesters[id]);
  return { requesters, requestItems, currentUser };
};

const mapDispatchToProps = dispatch => ({
  fetchRequests: (data) => dispatch(fetchRequests(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestIndex);

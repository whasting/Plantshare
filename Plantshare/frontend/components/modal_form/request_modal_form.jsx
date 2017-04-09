import React from 'react';
import Modal from 'react-modal';
import { style } from './style';

import RequestFormContainer from '../request_form/request_form_container';

class RequestModalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    return(
      <div>
        <button onClick={this.openModal}>Request Me!</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="request_form"
          >

          <RequestFormContainer closeModal={this.closeModal} request={this.props.request} 
            plantId={this.props.plantId}/>

        </Modal>
      </div>
    );
  }
}

export default RequestModalForm;

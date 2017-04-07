import React from 'react';
import Modal from 'react-modal';
import { style } from './style';

import PlantFormContainer from '../plant_form/plant_form_container';

class ModalForm extends React.Component {
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
        <button onClick={this.openModal}>Open Me!</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="plant_form"
          >

          <PlantFormContainer closeModal={this.closeModal} plant={this.props.plant}/>

        </Modal>
      </div>
    );
  }
}

export default ModalForm;

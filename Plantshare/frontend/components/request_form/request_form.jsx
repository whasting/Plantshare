import React from 'react';

class RequestForm extends React.Component {
  constructor(props){
    super(props);

    if(this.props.request){
      this.state = this.props.request;

    } else {

      this.state = {
        user_id: this.props.currentUser.id,
        plant_id: this.props.plantId,
        comment: "",
        status: "pending"
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const request = this.state;

    if(this.props.request){
      this.props.updateRequest( request );

    } else {
      request.user_id = this.props.currentUser.id;
      this.props.createRequest( request );

    }

    this.props.closeModal();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div className="request-form-container">
        <form onSubmit={this.handleSubmit} className="request-form">
          <label >Comments</label>
            <input type="text" value={this.state.comment}
              onChange={this.update("comment")} />

          <div className="request-form-submit">
            <input type="submit" value={`${this.props.formType} Plant`}/>
          </div>
        </form>
      </div>
    );
  }
}

export default RequestForm;

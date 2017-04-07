import React from 'react';

class PlantForm extends React.Component {
  constructor(props){
    super(props);

    if(this.props.plant){
      this.state = this.props.plant;

    } else {

      this.state = {
        title: "",
        description: "",
        instructions: "",
        lng: "",
        lat: "",
        img_url: "",
        start_time: "",
        end_time: ""
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const plant = this.state;

    if(this.props.plant){
      this.props.updatePlant( plant );

    } else {
      plant.owner_id = this.props.currentUser.id;
      this.props.createPlant( plant );

    }

    this.props.closeModal();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div className="plant-form-container">
        <form onSubmit={this.handleSubmit} className="plant-form">
          <label >Title</label>
            <input type="text" value={this.state.title}
              onChange={this.update("title")} />


          <label >Description</label>
            <textarea type="text" value={this.state.description}
              onChange={this.update("description")} />


          <label >Instructions</label>
            <textarea type="text" value={this.state.instructions}
              onChange={this.update("instructions")} />


          <div className="plant-form-submit">
            <input type="submit" value={`${this.props.formType} Plant`}/>
          </div>
        </form>
      </div>
    );
  }
}

export default PlantForm;

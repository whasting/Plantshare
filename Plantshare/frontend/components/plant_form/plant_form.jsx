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


    debugger;

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

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  render() {
    // const { plant } = this.props.plant;
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
          <label >Title</label>
            <input type="text" value={this.state.title}
              onChange={this.update("title")} />

          <label >Description</label>
            <input type="text" value={this.state.description}
              onChange={this.update("description")} />

          <label >Instructions</label>
          <input type="text" value={this.state.instructions}
            onChange={this.update("instructions")} />

          <input type="submit" value={`${this.props.formType} Plant`}/>
        </form>
      </div>
    );
  }
}

export default PlantForm;

import React,{ Component} from "react";


class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: ""
    };
  }
  handleSubmitForm(event) {
    alert("Full Name: " + this.state.fullName);
    event.preventDefault();
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState({
      fullName: value
    });
  }
  render() {
    return (
      <form onSubmit={event => this.handleSubmitForm(event)}>
        <label>
          Full Name:
          <input
            type="text"
            value={this.state.fullName}
            onChange={event => this.handleChange(event)}
          />
        </label>
        <input type="submit" value="Submit" />
        <p>{this.state.fullName}</p>        
      </form>
    );
  }
}
class FlavorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteFlavor: "coconut",
      description:' '
    };
  }
  handleSubmitForm(event) {
    alert("Favorite Flavor: " + this.state.favoriteFlavor +this.state.description);
    event.preventDefault();
  }
  handleChange(event) {
    var value = event.target.value;
  
    this.setState({
      
      favoriteFlavor: value,
      description: value
    });
  }
  render() {
    return (
      <SimpleForm><SimpleForm/>
      <form onSubmit={event => this.handleSubmitForm(event)}>
        <p>Pick your favorite flavor:</p>
        <input type="text" onChange={event => this.handleChange(event)}/>
        <select
            value={this.state.favoriteFlavor}
            onChange={event => this.handleChange(event)}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default FlavorForm;
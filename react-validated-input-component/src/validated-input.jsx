import React from "react";

export default class ValidatedInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    const input = this.state.password;
    if (!input) {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Password</h2>
          <input type="text" value={this.state.password} onChange={this.handleChange}/>
          <span>
            <i className="x-cross" class="fas fa-user-times"></i>
          </span>
          <p className="message">A password is required</p>
        </form>
      );
    } else if ( input.length < 8){
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Password</h2>
          <input type="text" value={this.state.password} onChange={this.handleChange} />
          <span>
            <i className="x-cross" class="fas fa-user-times"></i>
          </span>
          <p className="message">Your password is too short</p>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Password</h2>
          <input type="text" value={this.state.password} onChange={this.handleChange} />
          <span>
            <i class="fas fa-user-check"></i>
          </span>
        </form>);
    }
  }
}

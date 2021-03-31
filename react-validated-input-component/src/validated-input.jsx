import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const input = this.state.password;
    let message = '';
    let icon = 'fa-user-check';

    if (!input) {
      icon = 'fa-user-times';
      message = 'A password is required';
    } else if (input.length < 8) {
      icon = 'fa-user-times';
      message = 'Your passowrd is too short';
    }
    return (
        <form onSubmit={this.handleSubmit}>
          <h2>Password</h2>
          <input type="text" value={this.state.password} onChange={this.handleChange} />
          <span>
            <i className={`fas ${icon}`}></i>
          </span>
          <p className="message">{message}</p>
        </form>

    );
  }
}

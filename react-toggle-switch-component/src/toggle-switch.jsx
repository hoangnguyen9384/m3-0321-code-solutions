import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: true };
    this.clickToChange = this.clickToChange.bind(this);
  }

  clickToChange() {
    this.setState({ checked: false });
  }

  render() {
    return (
      <div>
        <h1>Toggle Switch</h1>
        <label className="switch">
          <input type="checkbox" checked={this.state.checked}
                  onClick = {this.clickToChange}/>
          <span className="slider"/>
        </label>
        <p> {this.state.checked ? 'ON' : 'OFF'}</p>
      </div>
    );
  }
}

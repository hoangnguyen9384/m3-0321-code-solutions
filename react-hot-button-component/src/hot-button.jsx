import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: 0 };
    this.clickTochange = this.clickTochange.bind(this);
  }

  clickTochange() {
    this.setState(state => ({ isClicked: this.state.isClicked + 1 }));
  }

  render() {
    const totalClicked = this.state.isClicked;
    let button;
    if (totalClicked <= 3) {
      button = 'purple';
    } else if (totalClicked > 3 && totalClicked <= 6) {
      button = 'lightPurple';
    } else if (totalClicked > 6 && totalClicked <= 9) {
      button = 'red';
    } else if (totalClicked > 9 && totalClicked <= 12) {
      button = 'orange';
    } else if (totalClicked > 12 && totalClicked <= 15) {
      button = 'yellow';
    } else if (totalClicked > 15 && totalClicked <= 18) {
      button = 'white';
    } else {
      button = 'white';
    }
    return (
      <div>
        <button className={button} onClick={this.clickToChange}>Hot Button</button>
      </div>
    );
  }
}

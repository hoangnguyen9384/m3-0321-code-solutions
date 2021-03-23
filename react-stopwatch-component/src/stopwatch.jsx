import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondElapsed: 0,
      secondWhenPause: null
    };
    this.myInterval = null;
    this.clickToStart = this.clickToStart.bind(this);
    this.clickToPause = this.clickToPause.bind(this);
    this.clickToReset = this.clickToReset.bind(this);
  }

  clickToStart() {
    this.myInterval = setInterval(() => {
      this.setState({ secondElapsed: this.state.secondElapsed + 1 });
    }, 1000);
  }

  clickToPause() {
    clearInterval(this.myInterval);
    this.setState({ secondWhenPause: this.myInterval });
  }

  clickToReset() {
    clearInterval(this.myInterval);
    this.setState({ secondElapsed: 0 });
  }

  render() {
    return (
      <div>
        <div className="circle" onClick={this.clickToReset}>
          <h1>{this.state.secondElapsed}</h1>
        </div>
        <div className="play-pause">
          {
            this.state.secondElapsed === 0 || this.myInterval === this.state.secondWhenPause
              ? <button onClick={this.clickToStart}><i className="fas fa-play"></i> </button>
              : <button onClick={this.clickToPause}><i className="fas fa-pause"></i> </button>
          }
        </div>
      </div>

    );
  }
}

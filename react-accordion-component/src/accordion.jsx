import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openId: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    index === this.state.openId
      ? this.setState({ openId: null })
      : this.setState({ openId: index });
  }

  render() {
    const items = this.props.data.map(x =>
      <div key={x.id}>
        <div className="title" onClick={() => this.handleClick(x.id)}>{x.title}</div>
        <div className="content" hidden={this.state.openId !== x.id}>
          <p>{x.content}</p>
        </div>
      </div>
    );

    return <div>{items}</div>;

  }
}

import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props)
  }

  renderTasks() {
  }

  render() {
    return (
      <ul>
        {this.props.tasks.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
}

export default Overview;

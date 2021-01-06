import React, { Component } from "react";
import Overview from './Components/Overview';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      tasks: [],
    }

    this.updateValue = this.updateValue.bind(this);
    this.addTask = this.addTask.bind(this);
    this.tellMe = this.tellMe.bind(this);
  }

  updateValue = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value })
  }

  addTask = (event) => {
    event.preventDefault();
    let newTasks = [...this.state.tasks, this.state.value];
    this.setState({ value: '', tasks: newTasks });
  };

  tellMe() {
    console.log(this.state.tasks);
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>
            <input type="text" value={this.state.value} name="name" onChange={ this.updateValue }/>
          </label>
          <input type="submit" value="Submit" onClick={ this.addTask }/>
        </form>
        <div>
          <Overview tasks={this.state.tasks} />
        </div>
      </div>
    )
  }
}

export default App;

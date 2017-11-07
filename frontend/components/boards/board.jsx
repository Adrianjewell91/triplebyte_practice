import React from 'react';
import NewTask from './new_task';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  createTask(e) {
    e.preventDefault();
    document.getElementById(`${this.props.title}-task`).classList.remove("hidden");
  }

  render() {
    return (
      <div className={this.props.className}
           id={this.props.title}
           onClick={this.createTask.bind(this)}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Board;

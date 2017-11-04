import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className={`board ${this.props.priority}`}>
        <h1>{this.props.title}</h1>
      </div>
    )
  }

}

export default Board;

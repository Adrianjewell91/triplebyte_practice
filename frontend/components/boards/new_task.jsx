import React from "react";

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};
  }

  addTask(e) {
    e.preventDefault();
    const task = document.createElement("h1")
    task.textContent = this.state.title;
    this.setState({title: ""});
    document.getElementById(this.props.title).appendChild(task);
    document.getElementById(`${this.props.title}-input`).value = "";
  }

  handleChange(e) {
      e.preventDefault();
      // debugger
      this.setState({title: document.getElementById(`${this.props.title}-input`)
                                    .value});
  }

  render() {
    return (
      <div className="hidden" id={`${this.props.title}-task`}>
        <form onSubmit={this.addTask.bind(this)}>
          <label> Task for {this.props.title}
            <input id={`${this.props.title}-input`}
                   type="text"
                   onChange={this.handleChange.bind(this)}></input>
          </label>

          <input type="submit"></input>
        </form>
      </div>
    )
  }

}

export default NewTask;

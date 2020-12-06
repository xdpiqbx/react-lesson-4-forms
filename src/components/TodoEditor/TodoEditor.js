import React, { Component } from 'react';

import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = event => {
    this.setState({
      message: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.message) {
      this.props.onSubmit(this.state.message);
    }

    this.setState({ message: '' });
    // this.props.todos.push({
    //   "id": "id-4",
    //   "text": this.state.message,
    //   "completed": false
    // })
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Submit
        </button>
      </form>
    );
  }
}

export default TodoEditor;

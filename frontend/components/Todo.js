import React from 'react'

class Todo extends React.Component {

  handleClick = () => {
    console.log("handle click", this.props.todo.id)
    this.props.handleToggle(this.props.todo.id)
  }

  render() {
    return <li onClick={this.handleClick}>  {this.props.todo.name} {this.props.todo.completed ? <span>- completed</span> : <span></span>}</li>;
  };
}
export default Todo
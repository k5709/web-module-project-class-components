import React from 'react'
import TodoList from './TodoList'
import Form from './Form'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          name: 'Take the Trash Out',
          id: 200,
          completed: false
        },
        {
          name: 'Wash the Dishes',
          id: 255,
          completed: false
        },
        {
          name: 'Make Dinner',
          id: 285,
          completed: false
        },
        {
          name: 'Walk The Dogs',
          id: 300,
          completed: false
        }
      ]
    }
  }

  handleAdd = (name) => {
    // setState
    // change todos
    // make a copy todos
    // add a new todo to the end
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleClear = () => {
    console.log("clear button clicked")
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    })
  }

  handleToggle = (clickedId) => {
    // setState
    // change todos
    // find the todo that we clicked on.
    // we want to flip the value of completed for that todo
    // keep all other todos the same 


    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    });
  };


  render() {
    const { todos } = this.state
    return (
      <div>
        <h1>Todo's</h1>

        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <Form handleAdd={this.handleAdd} />

        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  };
};


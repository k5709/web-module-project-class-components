import React from 'react'
import TodoList from './TodoList'



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

  render() {
    const { todos } = this.state
    return (
      <div>
        <h1>Todo's</h1>

        <TodoList todos={todos} />

        <form>
          <input />
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    );
  };
};


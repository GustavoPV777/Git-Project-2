import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className = "contenido">
        <ul>
          {
            this.props.todos.map(todo => <li key={todo.id}>{todo.name}</li>)
          }
          </ul>
        </div>
        
    )
  }
}
export default TodoList
import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    let input
    return (<div >
      <form onSubmit={
        e => {
          e.preventDefault()
          this.props.handleSubmit(input.value)
          input.value = ''
        }
      } >
        <input type="text"
          ref={
            (node) => { input = node }
          }
          placeholder="agregar notas" />
        <button > Add </button>
        <button > Cancel </button>
      </form >
    </div>)
  }
}

export default TodoForm
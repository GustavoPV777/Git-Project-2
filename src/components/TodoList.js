import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        console.log("hola mundo");
        return ( <
            div className = "contenido react" >
            <
            ul > {
                this.props.todos.map(todo => < li key = { todo.id } > { todo.name } < /li>)
                } <
                /ul> < /
                div >

            )
        }
    }
    export default TodoList
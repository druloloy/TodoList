import React, { Component } from 'react'
import TodoList from './TodoList'
import PropTypes from 'prop-types';

export class Todo extends Component {
    render() {
        return this.props.todo.map((todo)=>(
            <TodoList key={todo.id} markComplete = {this.props.markComplete } delTodo = {this.props.delTodo} todo={todo}/>
        ))
    }
}
// PropTypes
Todo.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default Todo

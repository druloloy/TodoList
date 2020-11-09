import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoList extends Component {
    changeStyle = () => {
        return {
           // textDecoration: this.props.todo.completed? "line-through": "none",
            backgroundColor: "#40E0D0",
            padding: "5px 10px",
            margin: "1rem",
            borderRadius: '10px',
            color: '#420420'
            }
    }
    text = ()=>{
    return (this.props.todo.completed)? <b> Completed </b>:
    ""
    }
    render() {
        const {id, title} = this.props.todo

        return (
            <div style={this.changeStyle()}>
                <p>
                
                <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) }/>
                {title} {this.text()}


                
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>&times;</button>
                </p>

               
            </div>
        )
    }
}
// PropTypes
TodoList.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: '#990012',
    border: 'none',
    outline: 'none',
    color: '#fff',
    padding: '6px 10px',
    float: 'right',
    borderRadius: '50%',
    cursor: 'pointer'
};
export default TodoList

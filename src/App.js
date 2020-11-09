import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {v4 as uuid} from 'uuid' 
import axios from 'axios'

import './App.css'

import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import About from './components/pages/About'

import Header from './layouts/Header'



export class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res=>{ this.setState({ todos: res.data }) })
  }
  markComplete = (id) => {
    this.setState({
        todos: this.state.todos.map(todo=>{
          if(todo.id === id){
            todo.completed = !todo.completed;
          }
          return todo
        })
    })
  }
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>{ this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
  }) })
    
  }
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res=>{
      this.setState({ todos: [...this.state.todos, res.data] })
    })
  }
  render() {
    return (

      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todo todo={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>

    )
  }
}

export default App

import React     from "react"
import PropTypes from "prop-types"
import Todos     from "./Todos"
import NewItem   from "./NewItem"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.destroyTodo      = this.destroyTodo.bind(this)
    this.removeTodo       = this.removeTodo.bind(this)
    this.createTodo       = this.createTodo.bind(this)
    this.updateTodo       = this.updateTodo.bind(this)
    this.updateTodos      = this.updateTodos.bind(this)
  }
  
  updateTodo(todo) {
    fetch(`/api/v1/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify({todo: todo}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      this.updateTodos(todo)
    })
  }
  
  updateTodos(todo) {
    let findTodo = this.state.todos.findIndex(element => element.id === todo.id)
    let updatedTodos = this.state.todos
    updatedTodos[findTodo] = todo
    this.setState({
      todos: updatedTodos
    })
  }
  
  destroyTodo(id) {
    fetch(`/api/v1/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      this.removeTodo(id)
    })
  }
  
  removeTodo(id) {
    let updatedTodos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({
      todos: updatedTodos
    })
  }
  
  handleFormSubmit(title, description) {
    let body = JSON.stringify({ todo: {title: title, description: description} })
    
    fetch('/api/v1/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body 
    })
    .then((response) => { return response.json() })
    .then((todo) => {
      this.createTodo(todo)
    })
  }
  
  createTodo(todo) {
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }
  
  componentDidMount() {
    fetch('/api/v1/todos.json')
    .then((response) => { return response.json() })
    .then((data) => { this.setState({ todos: data }) })
  }
  
  render () { 
    return (
      <div className="container">
        <NewItem handleFormSubmit={this.handleFormSubmit}/>
        <Todos todos={this.state.todos} destroyTodo={this.destroyTodo} updateTodo = {this.updateTodo}/>
      </div>
    );
  }
}

export default Body
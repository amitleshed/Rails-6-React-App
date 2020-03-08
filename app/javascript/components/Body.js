import React          from "react"
import PropTypes      from "prop-types"
import Todos          from "./Todos"
import NewItem        from "./NewItem"
import CompletedTodos from "./CompletedTodos"

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      completedTodos: []
    }
    
    this.createTodo           = this.createTodo.bind(this)
    this.destroyTodo          = this.destroyTodo.bind(this)
    this.removeTodo           = this.removeTodo.bind(this)
    this.updateTodo           = this.updateTodo.bind(this)
    this.updateTodos          = this.updateTodos.bind(this)
    this.pinTodo              = this.pinTodo.bind(this)
    this.createCompleteTodo   = this.createCompleteTodo.bind(this)
    this.destroyCompletedTodo = this.destroyCompletedTodo.bind(this)
  }
  
  componentDidMount() {
    fetch('/api/v1/todos.json')
    .then((response) => { return response.json() })
    .then((data) => { this.setState({ todos: data }) })
    
    fetch('/api/v1/completed_todos.json')
    .then((response) => { return response.json() })
    .then((data) => { this.setState({ completedTodos: data }) })
  }
  
  pinTodo(todo) {
    fetch(`/api/v1/todos/${todo.id}/pin`, {
      method: 'PUT',
      body: JSON.stringify({todo: todo}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      todo.pin = !todo.pin
      this.updateTodos(todo)
    })
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
  
  destroyCompletedTodo(id) {
    fetch(`/api/v1/completed_todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      this.componentDidMount()
    })
  }
  
  removeTodo(id) {
    let updatedTodos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({
      todos: updatedTodos
    })
  }
  
  createTodo(title, description) {
    let todoParams = JSON.stringify({ todo: {title: title, description: description} })
    
    fetch('/api/v1/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: todoParams 
    })
    .then((response) => { return response.json() })
    .then((todo) => {
      this.componentDidMount()
    })
  }
  
  createCompleteTodo(todo) {    
    let completedTodoParams = JSON.stringify({ completed_todo: {todo_id: todo.id, description: todo.description, title: todo.title} })

    fetch('/api/v1/completed_todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: completedTodoParams
    })
    .then((response) => { return response.json() })
    .then((completedTodo) => {
      this.setState({
        completedTodos: this.state.completedTodos.concat(completedTodo),
        todos: this.state.todos.filter((todo) => todo.id !== completedTodo.todo_id)
      })
    })
  }
  
  loadCompletedTodos() {
    
  }
  
  render () { 
    return (
      <React.Fragment>
      <NewItem createTodo={this.createTodo}/>
      <div className="container">
        <Todos todos             ={this.state.todos} 
               completedTodos    ={this.state.completedTodos}
               destroyTodo       ={this.destroyTodo} 
               updateTodo        ={this.updateTodo} 
               pinTodo           ={this.pinTodo} 
               createCompleteTodo={this.createCompleteTodo}
        />
        <loadCompletedTodos />
        <CompletedTodos completedTodos={this.state.completedTodos} destroyCompletedTodo={this.destroyCompletedTodo}/> 
      </div>
      </React.Fragment>
    );
  }
}

export default Body
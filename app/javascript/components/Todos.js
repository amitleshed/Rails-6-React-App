import React     from "react"
import PropTypes from "prop-types"
import Todo      from "./Todo"

class Todos extends React.Component {
  
  render () {
    var todosSortedByPin = this.props.todos.sort((x,y) => {
      return (x.pin === y.pin)? 0 : x.pin? -1 : 1
    })
    
    var todos = todosSortedByPin.map((todo) => {
      return(
        <li key={todo.id} className="todo">
          <Todo todo={todo} 
                destroyTodo={this.props.destroyTodo} 
                updateTodo={this.props.updateTodo} 
                pinTodo={this.props.pinTodo} 
                createCompleteTodo={this.props.createCompleteTodo} 
          />
        </li>
      )
    })
    
    if (this.props.todos.length == 0) {
      return null
    }
    
    return(
      <ul className="todos">
        <h2>Todos</h2>
        {todos}
      </ul>
    )
  }
}

export default Todos

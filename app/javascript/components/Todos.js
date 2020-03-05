import React     from "react"
import PropTypes from "prop-types"
import Todo      from "./Todo"

class Todos extends React.Component {
  
  render () {
    var sortedTodos = this.props.todos.sort((x,y) => {
      return (x.pin === y.pin)? 0 : x.pin? -1 : 1
    })
    
    var todos = sortedTodos.map((todo) => {
      return(
        <li key={todo.id} className="todo">
          <Todo todo={todo} destroyTodo={this.props.destroyTodo} updateTodo={this.props.updateTodo} pinTodo={this.props.pinTodo} />
        </li>
      )
    })
    
    return(
      <ul className="todos">
        {todos}
      </ul>
    )
  }
}

export default Todos

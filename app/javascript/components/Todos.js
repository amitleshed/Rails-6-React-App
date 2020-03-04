import React     from "react"
import PropTypes from "prop-types"
import Todo      from "./Todo"

class Todos extends React.Component {
  
  render () {
    var todos = this.props.todos.map((todo) => {
      return(
        <li key={todo.id} className="todo">
          <Todo todo={todo} destroyTodo={this.props.destroyTodo} updateTodo={this.props.updateTodo}/>
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

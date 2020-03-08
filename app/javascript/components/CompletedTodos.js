import React        from "react"
import PropTypes    from "prop-types"
import CompletedTodo from "./CompletedTodo"

class CompletedTodos extends React.Component {
  
  render () {
    
    var completedTodos = this.props.completedTodos.map((todo) => {
      return(
        <li key={todo.id} className="todo todo--completed">
          <CompletedTodo todo={todo} destroyCompletedTodo={this.props.destroyCompletedTodo} />
        </li>
      )
    })
    
    if (this.props.completedTodos.length == 0) {
      return null
    }
    
    return (
      <ul className="todos todos--completed">
        <h2>Completed</h2>
        {completedTodos}
      </ul>
    );
  }
}

export default CompletedTodos

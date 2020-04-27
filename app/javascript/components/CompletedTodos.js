import React        from "react"
import PropTypes    from "prop-types"
import CompletedTodo from "./CompletedTodo"

class CompletedTodos extends React.Component {
  
  render () {
    
    var completedTodos = this.props.completedTodos.map((todo) => {
      if (todo.title.toLowerCase().indexOf(this.props.searchText.toLowerCase()) === -1 && todo.description.toLowerCase().indexOf(this.props.searchText.toLowerCase()) === -1) {
        return
      }
      return(
        <li key={todo.id} id={"completed_todo_" + todo.id} className="todo todo--completed">
          <CompletedTodo todo={todo} toggleCompleteTodo={this.props.toggleCompleteTodo} />
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

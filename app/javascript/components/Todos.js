import React     from "react"
import PropTypes from "prop-types"
import Todo      from "./Todo"
import Body      from "./Body"

class Todos extends React.Component {
  render () {
    var todosSortedByPin = this.props.todos.sort((x,y) => {
      return (x.pin === y.pin)? 0 : x.pin? -1 : 1
    })
    
    var todos = todosSortedByPin.map((todo) => {
      if (todo.title.toLowerCase().indexOf(this.props.searchText.toLowerCase()) === -1 && todo.description.toLowerCase().indexOf(this.props.searchText.toLowerCase()) === -1) {
        return
      }
      
      return(
        <li key={todo.id} id={"todo_" + todo.id} className={todo.pin ? "todo todo--bookmarked" : "todo"}>
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
      <React.Fragment>
      <ul className="todos">
        <h2>Todos</h2>
        {todos}
      </ul>
      </React.Fragment>
    )
  }
}

export default Todos

import React     from "react"
import PropTypes from "prop-types"

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
    
    this.editTodo   = this.editTodo.bind(this)
  }
  
  editTodo() {
    if (this.state.editable) {
      let title = this.title.value
      let description = this.description.value
      let id = this.props.todo.id
      let todo = {id: id, title: title, description: description}
      this.props.updateTodo(todo)
    }
    
    this.setState({
      editable: !this.state.editable
    })
  }
  
  render () {
    let title       = this.state.editable ?
                      <input type="text" ref={input => this.title = input} defaultValue={this.props.todo.title}/> :
                      <h3>{this.props.todo.title}</h3>
    
    let description = this.state.editable ?
                      <input type="text" ref={input => this.description = input} defaultValue={this.props.todo.description}/> :
                      <p>{this.props.todo.description}</p>
    
    return (
      <React.Fragment>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={() => this.editTodo()}>{this.state.editable ? 'Save' : 'Edit'}</button>
        <button onClick={() => this.props.destroyTodo(this.props.todo.id)}>delete</button>
      </React.Fragment>
    );
  }
}

export default Todo

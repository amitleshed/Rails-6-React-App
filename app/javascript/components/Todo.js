import React     from "react"
import PropTypes from "prop-types"
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CheckIcon from '@material-ui/icons/Check';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom"

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
      let pin = this.props.todo.pin
      let todo = {id: id, title: title, description: description, pin: pin}
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
        <Link 
          key={this.props.todo.id}
          to={{
            pathname: `/todos/${this.props.todo.id}`
          }}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Link>
        <div className="todo--actions">
          <button onClick={() => this.editTodo()}>{ this.state.editable ? <CheckIcon /> : <EditOutlinedIcon /> }</button>
          <button onClick={() => this.props.destroyTodo(this.props.todo.id)}><DeleteOutlineOutlinedIcon /></button>
          <button onClick={() => this.props.pinTodo(this.props.todo)}>{ this.props.todo.pin ? <BookmarkIcon /> : <BookmarkBorderIcon /> }</button>
          <button onClick={() => this.props.createCompleteTodo(this.props.todo)}><CheckCircleIcon /></button>
        </div>
      </React.Fragment>
    );
  }
}

export default Todo

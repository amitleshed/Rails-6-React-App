import React                     from "react"
import PropTypes                 from "prop-types"
import EditOutlinedIcon          from '@material-ui/icons/EditOutlined';
import CheckIcon                 from '@material-ui/icons/Check';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import BookmarkIcon              from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon        from '@material-ui/icons/BookmarkBorder';
import CheckCircleIcon           from '@material-ui/icons/CheckCircle';
import Input                     from '@material-ui/core/Input';
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
                      <Input type="text" inputRef={input => this.title = input} defaultValue={this.props.todo.title}></Input> :
                      <h3>{this.props.todo.title}</h3>
    
    let description = this.state.editable ?
                      <Input type="text" inputRef={input => this.description = input} defaultValue={this.props.todo.description}></Input> :
                      <p>{this.props.todo.description}</p>
    
    let todoInfo = this.state.editable ?
                    <div className="todo__info">
                      {title}
                      {description}
                    </div> : 
                    <Link 
                      key={this.props.todo.id}
                      to={{
                        pathname: `/todos/${this.props.todo.id}`
                      }}>
                      <div className="todo__info">
                        <h3 className="todo__title">{title}</h3>
                        <p className="todo__description">{description}</p>
                      </div>
                    </Link>
    
    return (
      <React.Fragment>
        {todoInfo}
        <div className="todo__actions">
          <button onClick={() => this.editTodo()}>{ this.state.editable ? <CheckIcon /> : <EditOutlinedIcon /> }</button>
          <button onClick={() => this.props.destroyTodo(this.props.todo.id)}><DeleteOutlineOutlinedIcon /></button>
          <button onClick={() => this.props.pinTodo(this.props.todo)}>{ this.props.todo.pin ? <BookmarkIcon /> : <BookmarkBorderIcon /> }</button>
          <button onClick={() => this.props.toggleCompleteTodo(this.props.todo)}><CheckCircleIcon /></button>
        </div>
      </React.Fragment>
    );
  }
}

export default Todo

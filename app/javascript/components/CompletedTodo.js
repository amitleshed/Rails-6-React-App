import React     from "react"
import PropTypes from "prop-types"
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CheckIcon from '@material-ui/icons/Check';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

class CompleteTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  
  render () {
    return (
      <React.Fragment>
        <h3>{this.props.todo.title}</h3>
        <p>{this.props.todo.description}</p>
        <div className="todo--actions">
          <button onClick={() => this.props.destroyCompletedTodo(this.props.todo.id)}><DeleteOutlineOutlinedIcon /></button>
        </div>
      </React.Fragment>
    );
  }
}

export default CompleteTodo

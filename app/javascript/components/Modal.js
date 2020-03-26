import React     from "react"
import PropTypes from "prop-types"
import Input     from '@material-ui/core/Input';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom"

const Modal = (props) => {
  let {id} = useParams()
  var todo = props.todos.find(todo => todo.id === parseInt(id))
  let history = useHistory()
  
  let back = e => {
    e.preventDefault()
    e.stopPropagation()
    history.goBack()
  }
  
  let handleInput = e => {
    props.todoTitleChange(todo, e.target.value)
  }
  
  return (
    <React.Fragment>
      <div className="modal-background"
           onClick={back}>
      </div>
      <div className="modal">
        <h2>{todo.title}</h2>
        <Input type="text" onChange={handleInput} placeholder="Edit todo's title"></Input>
      </div>
    </React.Fragment>
  );
}

export default Modal

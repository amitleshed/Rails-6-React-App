import React, { useRef } from "react"
import PropTypes from "prop-types"
import Input     from '@material-ui/core/Input'
import Notes     from './Notes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom"
import OutsideAlerter from './OutsideAlerter'
import Button from '@material-ui/core/Button'
import LabelPalette from './LabelPalette'
import Labels from './Labels'
import AppPopper from "./AppPopper"

function Modal(props) {
  let {id} = useParams()
  var todo = props.todos.find(todo => todo.id === parseInt(id))
  let history = useHistory()
  
  let back = e => {
    e.preventDefault()
    e.stopPropagation()
    history.goBack()
  }
  
  const textarea = useRef()
  
  let handleInput = e => {
    props.todoTitleChange(todo, e.target.value)
  }
  
  let handleEdit = e => {
    props.todoDescriptionEdit()
    if (!props.todoDescriptionEditable) {
      setTimeout(() => {
        textarea.current.focus()
        textarea.current.select()
      }, 10)
    }
  }
  
  let handleEditSubmit = e => {
    e.preventDefault()
    todo.description = textarea.current.value
    props.updateTodo(todo)
    handleEdit()
  }
  
  let description = () => {
    if (props.todoDescriptionEditable) {
      return(
        <OutsideAlerter actionOnClickOutside={handleEdit}>
          <form onSubmit={handleEditSubmit}>
            <textarea type="text" placeholder="Add a more detailed description..." ref={textarea} defaultValue={todo.description}></textarea>
            <Button type="submit">Save</Button>
            <a className="close-button" onClick={handleEdit}>x</a>
          </form>
        </OutsideAlerter>
      )
    } else {
      if (todo.description === "") {
        return <div className="fake-description" onClick={handleEdit}>
                <span>Add a more detailed description...</span>
               </div>
      } else {
        return <p className="description" onClick={handleEdit}>{todo.description}</p>
      }
    }
  }
  
  let doneBadge = todo.completed ? 
                    <div className="done-badge">
                      <div>
                        <span>
                          COMPLETED
                        </span>
                      </div>
                    </div> :
                    ''
  
  return (
    <React.Fragment>
      {doneBadge}
      <div className="modal-background"
           onClick={back}>
      </div>
      <div className="modal">
        <div className="modal__main">
          <div className="section todo__title--modal">
            <input type="text" onChange={handleInput} placeholder="Name this todo" value={todo.title}/>
          </div>
          <div className="section todo__labels--modal">
          	<Labels todo={todo} getLabels={props.getLabels} labels={props.labels}/>
          </div>
          <div className="section todo__description--modal">
          	<h3>Description</h3>
            {description()}
          </div>
          <div className="section todo__notes--modal">
            <h3>Notes</h3>
            <Notes todo={todo} />
          </div>
        </div>
        <div className="modal__panel">
          <ul className="buttons">
            <li className="button">
              <AppPopper label="labels" placement="bottom-start">
                <LabelPalette todo={todo} createLabel={props.createLabel} />
              </AppPopper>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Modal

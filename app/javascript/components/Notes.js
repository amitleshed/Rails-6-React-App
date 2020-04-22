import React from "react";
import PropTypes from "prop-types"
import Button    from '@material-ui/core/Button';
import Input     from '@material-ui/core/Input';
import OutsideAlerter from "./OutsideAlerter"

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      noteIsFocused: false,
      disabled: true
    }
    
    this.createNote           = this.createNote.bind(this)
    this.destroyNote          = this.destroyNote.bind(this)
    this.getNotes             = this.getNotes.bind(this)
    this.handleFocus          = this.handleFocus.bind(this)
    this.actionOnClickOutside = this.actionOnClickOutside.bind(this)
    this.disableInput         = this.disableInput.bind(this)
  }
  
  componentDidMount() {
    this.getNotes()
  }
  
  getNotes() {
    fetch('/api/v1/notes.json')
    .then((response) => { return response.json() })
    .then((data) => { this.setState({ notes: data.reverse().filter(note => note.todo_id === this.props.todo.id) }) })
  }
  
  createNote(content) {
    let noteParams = JSON.stringify({ note: {content: content, todo_id: this.props.todo.id} })
    
    fetch('/api/v1/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: noteParams
    })
    .then((response) => { 
      this.getNotes() 
      this.setState({ noteIsFocused: false })
    })
  }
  
  destroyNote(note) {
    fetch(`/api/v1/notes/${note.id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      this.getNotes()
    })
  }
  
  handleFocus() {
    if (!this.state.noteIsFocused) {
      this.setState({ noteIsFocused: !this.state.noteIsFocused }) 
    }
  }
  
  actionOnClickOutside() {
    if (this.state.noteIsFocused) {
      this.setState({ noteIsFocused: !this.state.noteIsFocused }) 
    }
  }
  
  disableInput(input) {
    if (input === "") {
      this.setState({ disabled: true })
    } else {
      this.setState({ disabled: false })
    }
  }
  
  render () {
    
    var formFields = {}
    var localDate = (timestamp) => {
      return new Date(timestamp).toDateString()
    }
    var notes = this.state.notes.map((note) => {
      return(
        <li className="note" key={note.id} id={"note_" + note.id}>
          <span className="note__content">
            {note.content}
          </span>
          <span className="note__created_at">
            {localDate(note.created_at)}
          </span>
          <div className="note__actions">
            <ul className="actions">
              <li className="action">
                <a onClick={ (e) => {this.destroyNote(note)} }>Delete</a>
              </li>
            </ul>
          </div>
        </li>
      )
    })
    
    return (
      <React.Fragment>
        <OutsideAlerter actionOnClickOutside={this.actionOnClickOutside}>
          <form onSubmit={ (e) => {
            this.createNote(formFields.content.value);
            e.target.reset();
            e.preventDefault();
            e.target[0].blur()
            this.disableInput(e.target[0].value)
          }}>
            <div className="note__frame" ref={this.setWrapperRef} onClick={ () => { this.handleFocus() }}>
              <div className={ this.state.noteIsFocused ? "note__box note__box--focused" : "note__box" }>
                <input ref={input => formFields.content = input}
                       onChange={ (e) => { this.disableInput(e.target.value) }}
                       placeholder="Take a note"/>
              
                <div className="note__controls">
                  <Button type="submit" variant="outlined" disabled={ this.state.disabled }>Create</Button>
                </div>
              </div>
            </div>
          </form>
        </OutsideAlerter>
                
        <ul className="notes">
          {notes}
        </ul>
      </React.Fragment>
    );
  }
}

export default Notes

import React from "react"
import PropTypes from "prop-types"
import AppPopper from "./AppPopper"

class LabelPalette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: []
    }
    
    this.handleCreation = this.handleCreation.bind(this)
  }
  
  componentDidMount() {
  }
  
  createLabel(params) {
    fetch(`/api/v1/todos/${this.props.todo.id}/labels`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    })
  }
  
  handleCreation(color) {
    let params = JSON.stringify({ label: { color: color, todo_id: this.props.todo.id } })
    this.createLabel(params)
  }
  
  render () {
    return (
      <React.Fragment>
        <h3>Labels</h3>
        <ul className="labels">
          <li className="label label--green" onClick={ () => { this.handleCreation(0) }}>
          </li>
          <li className="label label--yellow" onClick={ () => { this.handleCreation(1) }}>
          </li>
          <li className="label label--orange" onClick={ () => { this.handleCreation(2) }}>
          </li>
          <li className="label label--red" onClick={ () => { this.handleCreation(3) }}>
          </li>
          <li className="label label--purple" onClick={ () => { this.handleCreation(4) }}>
          </li>
          <li className="label label--blue" onClick={ () => { this.handleCreation(5) }}>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default LabelPalette

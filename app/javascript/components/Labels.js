import React from "react"
import PropTypes from "prop-types"

class Labels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
    }
    
    this.getLabels = this.getLabels.bind(this)
  }
  
  componentDidMount() {
    this.getLabels()
  }
  
  getLabels() {
    fetch(`/api/v1/todos/${this.props.todo.id}/labels.json`)
    .then((response) => { return response.json() })
    .then((data) => { this.setState({ labels: data }) })
  }
  
  render () {
    let activeLabels = this.state.labels.map((label) => {
      return (
        <li className="label label--active">
          <span>
            {label.color}
          </span>
        </li>
      )
    })
    
    return (
      <React.Fragment>
        <ul className="active-labels">
          {activeLabels}
        </ul>
      </React.Fragment>
    );
  }
}

export default Labels

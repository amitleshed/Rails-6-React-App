import React from "react"
import PropTypes from "prop-types"

class Labels extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
	  this.props.getLabels(this.props.todo.id)
  }
  
  render () {
    let activeLabels = this.props.labels.map((label) => {
      return (
        <li className={"label label--active label--" + label.color}>
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

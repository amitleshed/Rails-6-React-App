import React from "react"
import PropTypes from "prop-types"
import Input     from '@material-ui/core/Input';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }
  
  handleSearch(e) {
    this.props.onSearch(e.target.value)
  }
  
  render () {
    return (
      <React.Fragment>
        <Input onChange={this.handleSearch} placeholder="Search for todos...">
        </Input>
      </React.Fragment>
    );
  }
}

export default SearchBar

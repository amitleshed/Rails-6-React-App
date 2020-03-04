import React     from "react"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';

class NewItem extends React.Component {
  render() {
    
    var formFields = {}
    
    return (
      <form onSubmit={ (e) => {
        this.props.handleFormSubmit(formFields.name.value, formFields.description.value);
        e.target.reset();
        e.preventDefault();
      }}>
        <input ref={input => formFields.name = input} 
               placeholder="Name this todo"></input>
        
        <input ref={input => formFields.description = input} 
               placeholder="Describe this todo"></input>
        
        <input type="submit" value="Submit"/>
      </form>
    );
  } 
}

export default NewItem

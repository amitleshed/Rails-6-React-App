import React     from "react"
import PropTypes from "prop-types"
import Button    from '@material-ui/core/Button';
import Input     from '@material-ui/core/Input';

class NewItem extends React.Component {
  render() {
    
    var formFields = {}
    
    return (
      <form onSubmit={ (e) => {
        this.props.createTodo(formFields.name.value, formFields.description.value);
        e.target.reset();
        e.preventDefault();
      }}>
        <Input inputRef={input => formFields.name = input} 
               placeholder="Name this todo"
               required="true">
        </Input>
        <br />
        
        <Input inputRef={input => formFields.description = input} 
               placeholder="Describe this todo"
               required="true">
        </Input>
        <br />
        
        <Button type="submit" variant="outlined">Create</Button>
      </form>
    );
  } 
}

export default NewItem

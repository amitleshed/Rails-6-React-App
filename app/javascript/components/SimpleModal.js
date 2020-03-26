import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import UIModal from '@material-ui/core/Modal';

class SimpleModal extends React.Component {
  render () {
    const useStyle = makeStyles(theme => ({
      paper: {
        position: 'absolute',
        width: 40,
        background: 'white',
        boxShadow: '0px 3px 9px rgba(0,0,0,.1)'
      }
    }))
    
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

export default SimpleModal

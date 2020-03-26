import React     from "react"
import PropTypes from "prop-types"
import Popper    from '@material-ui/core/Popper';
import Fade      from '@material-ui/core/Fade';
import SearchBar from './SearchBar'
import Button    from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    border: '1px solid rgba(0,0,0,0.2)',
    padding: '1em',
    backgroundColor: 'white',
    borderRadius: '6px',
    boxShadow: '0px 3px 10px rgba(0,0,0,0.3)'
  },
}))

function AppPopper(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'transition-popper' : undefined
  
  return (
    <React.Fragment>
      <Button aria-describedby={id} type="button" onClick={handleClick} variant="outlined">
        {props.icon} {props.label}
      </Button>
      <Popper placement={props.placement} id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={310}>
            <div className={classes.paper}>
              {props.children}
            </div>
          </Fade>
        )}
      </Popper>
    </React.Fragment>
  );
}

export default AppPopper

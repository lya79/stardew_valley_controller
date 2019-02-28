import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom:16,
    right:16+56+16,
  },
});

class SimpleModal extends React.Component { 
  constructor(props,context){
    super(props,context);

    this.handleButtonPress = this.handleButtonPress.bind(this)
    this.handleButtonRelease = this.handleButtonRelease.bind(this)
  }

  // handleEvent = (evt, data) => { 
  //   this.props.handleKeyEvent("0:mouse_left")
  // }
  
  handleButtonPress () {
    console.log("press")
    this.props.handleKeyEvent("1:mouse_left")
  }

  handleButtonRelease () {
    console.log("release")
    this.props.handleKeyEvent("2:mouse_left")
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Fab onClick={this.handleEvent} color="primary" aria-label="Add" className={classes.fab}> */}
        <Fab           
          onTouchStart={this.handleButtonPress} 
          onTouchEnd={this.handleButtonRelease} 
          onMouseDown={this.handleButtonPress} 
          onMouseUp={this.handleButtonRelease} 
          onMouseLeave={this.handleButtonRelease} 
          color="primary" 
          aria-label="Add" 
          className={classes.fab}>
            <Typography  color="inherit" variant="caption" gutterBottom>
              LEFT MOUSE
            </Typography>
        </Fab>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const App = withStyles(styles)(SimpleModal);

export default App;

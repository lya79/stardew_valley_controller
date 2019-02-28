import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom:16+56+16,
    right:16+(56+16)*1,
  },
});

class SimpleModal extends React.Component {
  constructor(props,context){
    super(props,context);

    this.state = {
    };
  }

  handleEvent = (evt, data) => { 
    this.props.handleKeyEvent("0:f")
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Fab onClick={this.handleEvent} color="primary" aria-label="Add" className={classes.fab}>
            <Typography color="inherit" variant="caption" gutterBottom>
              F
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

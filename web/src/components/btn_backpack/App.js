import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/List';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom:16+56+16,
    right:16,
  },
});

class SimpleModal extends React.Component {
  constructor(props,context){
    super(props,context);
  }

  handleEvent = (evt, data) => { 
    this.props.handleKeyEvent("0:e")
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Fab onClick={this.handleEvent} color="primary" aria-label="Add" className={classes.fab}>
            <Typography color="inherit" variant="caption" gutterBottom>
              E
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

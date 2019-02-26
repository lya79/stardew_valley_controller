import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom:16+50,
    right:16,
  },
});

class SimpleModal extends React.Component {
  constructor(props,context){
    super(props,context);

    this.state = {
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
  }

  handleTitle(event) {
   
  }

  handleContent(event) {
   
  }

  handleOpen = () => {

  };

  handleClose = () => {

  };

  
  handleRepleaceAll = () => {

  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Fab color="primary" aria-label="Add" className={classes.fab}>
            <Typography color="inherit" variant="caption" gutterBottom>
              RIGHT MOUSE
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

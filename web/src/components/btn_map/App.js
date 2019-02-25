import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Explore';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom:16+56+16+50,
    right:16+(56+16)*2,
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
            <AddIcon onClick={this.handleOpen}/> 
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

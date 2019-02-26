import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom:0+50+(116/5),
    left:0+116+16,
  },
  button: {
    // margin: theme.spacing.unit,
  },
});

class SimpleModal extends React.Component {
  constructor(props,context){
    super(props,context);

    this.state = {
        age: '',
    };
  }

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.fab}>
          <div>
            <Button variant="outlined" color="primary" className={classes.button}>
              1
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              2
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              3
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              4
            </Button>
          </div>
          <div>
          <Button variant="outlined" color="primary" className={classes.button}>
              5
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              6
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              7
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              8
            </Button>
          </div>
          <div>
          <Button variant="outlined" color="primary" className={classes.button}>
              9
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              10
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              11
            </Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              12
            </Button>
          </div>
        </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const App = withStyles(styles)(SimpleModal);

export default App;

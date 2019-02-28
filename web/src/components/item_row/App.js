import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom:0+25,
    left:0+116+16,
  },
  button: {
    // margin: theme.spacing.unit,
  },
});

class SimpleModal extends React.Component {
  constructor(props,context){
    super(props,context);
  }

  handleEvent1 = (evt, data) => { 
    this.props.handleKeyEvent("0:1")
  }
  handleEvent2 = (evt, data) => { 
    this.props.handleKeyEvent("0:2")
  }
  handleEvent3 = (evt, data) => { 
    this.props.handleKeyEvent("0:3")
  }
  handleEvent4 = (evt, data) => { 
    this.props.handleKeyEvent("0:4")
  }
  handleEvent5 = (evt, data) => { 
    this.props.handleKeyEvent("0:5")
  }
  handleEvent6 = (evt, data) => { 
    this.props.handleKeyEvent("0:6")
  }
  handleEvent7 = (evt, data) => { 
    this.props.handleKeyEvent("0:7")
  }
  handleEvent8 = (evt, data) => { 
    this.props.handleKeyEvent("0:8")
  }
  handleEvent9 = (evt, data) => { 
    this.props.handleKeyEvent("0:9")
  }
  handleEvent0 = (evt, data) => { 
    this.props.handleKeyEvent("0:0")
  }
  handleEventDash = (evt, data) => { 
    this.props.handleKeyEvent("0:-")
  }
  handleEventEqual = (evt, data) => { 
    this.props.handleKeyEvent("0:=")
  }

  render() {
    const { classes } = this.props;

    return ( 
        <div className={classes.fab}>
          <div>
            <Button onClick={this.handleEvent1} variant="outlined" color="primary" className={classes.button}>
              1
            </Button>
            <Button onClick={this.handleEvent2} variant="outlined" color="primary" className={classes.button}>
              2
            </Button>
            <Button onClick={this.handleEvent3} variant="outlined" color="primary" className={classes.button}>
              3
            </Button>
            <Button onClick={this.handleEvent4} variant="outlined" color="primary" className={classes.button}>
              4
            </Button>
          </div>
          <div>
            <Button onClick={this.handleEvent5} variant="outlined" color="primary" className={classes.button}>
              5
            </Button>
            <Button onClick={this.handleEvent6} variant="outlined" color="primary" className={classes.button}>
              6
            </Button>
            <Button onClick={this.handleEvent7} variant="outlined" color="primary" className={classes.button}>
              7
            </Button>
            <Button onClick={this.handleEvent8} variant="outlined" color="primary" className={classes.button}>
              8
            </Button>
          </div>
          <div>
            <Button onClick={this.handleEvent9} value='0:num9' variant="outlined" color="primary" className={classes.button}>
              9
            </Button>
            <Button onClick={this.handleEvent0} value='0:num0' variant="outlined" color="primary" className={classes.button}>
              0
            </Button>
            <Button onClick={this.handleEventDash} value='0:-' variant="outlined" color="primary" className={classes.button}>
              -
            </Button>
            <Button onClick={this.handleEventEqual} value='0:=' variant="outlined" color="primary" className={classes.button}>
              =
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

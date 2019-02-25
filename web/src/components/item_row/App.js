import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    // root: {
        // display: 'flex',
        // flexWrap: 'wrap',
    //   },
    // fab: {
    //     position: 'fixed',
    //     bottom:0,
    //     left:100,
    //   },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        position: 'fixed',
        bottom:16+50+50,
        left:16+116,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SimpleModal extends React.Component {
  constructor(props,context){
    super(props,context);

    this.state = {
        age: '',
    };
  }

// <Button variant="outlined" color="primary" className={classes.button}>
// 1
// </Button>

  render() {
    const { classes } = this.props;

    return (
        <FormControl className={classes.formControl}>
          <InputLabel>Item</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            // inputProps={{
            //   name: 'age',
            //   id: 'age-simple',
            // }}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
        </FormControl>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const App = withStyles(styles)(SimpleModal);

export default App;

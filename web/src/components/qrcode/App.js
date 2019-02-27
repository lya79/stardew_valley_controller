import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Explore';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  fab: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    // padding: theme.spacing.unit * 2,
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
});

class SimpleModal extends React.Component {
  render() {
    const { classes } = this.props;
    var React = require('react');
    var QRCode = require('qrcode.react');
    var host = window.location.hostname
    var url = "http://"+host+":3000/"
    console.log("web url:"+url); // TODO 需要取得服務器 IP
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <Grid>
          <Grid className={classes.title}>
            <Typography variant="h5" gutterBottom>
              手機掃描此條碼可直接開啟遊戲手把
            </Typography>
          </Grid>
          <Grid className={classes.title}>
            <Typography variant="h5" gutterBottom>
              {window.location.href}
            </Typography>
          </Grid>
          <Grid className={classes.title}>
            <QRCode value={url}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const App = withStyles(styles)(SimpleModal);

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Explore';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import QueryIP from '../HttpMethods/QueryIP';

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
  constructor() {
    super();

    this.state = {
      webURL: '',
    };
  }

  componentWillMount() {
    this.handleQueryIP()
  }

  handleQueryIP = () => { 
    console.log('start QueryIP');
    // fetch http://localhost:8080/query
    // 掛載前要取得, 因為要在 QR Code產生前取得 ip

    let self = this;
    var callbackSignIn = function(ip){ 
      if(undefined === ip || ip.length <= 0){
        console.log('fail QueryIP');
        self.setState({
          webURL: '',
        });
        return;
      }

      console.log('success QueryIP:'+ip);
      var url = "http://"+ip+":8080/"
      self.setState({
        webURL: url,
      });
    }
    QueryIP(callbackSignIn);
  };

  render() {
    const { classes } = this.props;
    var React = require('react');
    var QRCode = require('qrcode.react');
    console.log("web url:"+this.state.webURL); // TODO 需要取得服務器 IP
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
              {this.state.webURL}
            </Typography>
          </Grid>
          <Grid className={classes.title}>
            <QRCode value={this.state.webURL}/>
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

import React from 'react';
import ReactNipple from 'react-nipple';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import DebugView from 'react-nipple/lib/DebugView';

const styles = theme => ({
    fab: {
      position: 'fixed',
      bottom:0+50,
      left:0,
    },
});

class GamePad extends React.Component {
    state = {
        data: {}
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.fab}>
                <ReactNipple 
                    options={{ 
                      mode: 'static', 
                      position: { top: '50%', left: '50%' }, 
                      color: 'blue',
                    }}
                    style={{
                        // outline: '1px dashed red',
                        // color: 'blue',
                        width: 150,
                        height: 150,
                        position: 'relative'
                    }}
                    onStart={this.handleEvent}
                    onEnd={this.handleEvent}
                    onMove={this.handleEvent}
                    onDir={this.handleEvent}
                    onPlain={this.handleEvent}
                    onShown={this.handleEvent}
                    onHidden={this.handleEvent}
                    onPressure={this.handleEvent}
                />
                {/* <DebugView data={this.state.data} /> */}
            </div>
        );
    }
    handleEvent = (evt, data) => {
        this.setState({ data });

        // console.log(event, data)

        // if(data.pressure!=undefined){ // 是否按壓住方向 
        //   console.log(data.pressure==undefined?"release":"press")
        // }

        // if(evt.type == "start"){ // 是否按壓住方向 
        //   console.log("開始按壓")
        // }else if(evt.type == "move"){
        //   console.log("移動")
        // }else if(evt.type == "end"){
        //   console.log("結束按壓")
        // }else{
        //   console.log(evt.type)
        // }
        
        if(data.direction!=undefined){ // 方向
            console.log(data.direction.x +", "+data.direction.y)
        }else{
            console.log("release")
        }

        
    };
}

GamePad.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  const App = withStyles(styles)(GamePad);
  
  export default App;
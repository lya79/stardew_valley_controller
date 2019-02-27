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

var lastKey;

class GamePad extends React.Component {
    // state = {
    //     data: {}
    // };

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
        // this.setState({ data });

        if(data.direction!==undefined){ // 方向
            // console.log(data.direction.angle)
            
            console.log("lastKey:"+lastKey)

            if(data.direction.angle === lastKey){
                return;
            }

            if(lastKey==="up"){
                this.props.handleKeyEvent("2:w")
            }else if(lastKey==="down"){
                this.props.handleKeyEvent("2:s")
            }else if(lastKey==="left"){
                this.props.handleKeyEvent("2:a")
            }else if(lastKey==="right"){
                this.props.handleKeyEvent("2:d")
            }

            lastKey = data.direction.angle;

            if(lastKey==="up"){
                this.props.handleKeyEvent("1:w")
            }else if(lastKey==="down"){
                this.props.handleKeyEvent("1:s")
            }else if(lastKey==="left"){
                this.props.handleKeyEvent("1:a")
            }else if(lastKey==="right"){
                this.props.handleKeyEvent("1:d")
            }
        }else{
            lastKey = undefined;
            this.props.handleKeyEvent("2:w")
            this.props.handleKeyEvent("2:s")
            this.props.handleKeyEvent("2:a")
            this.props.handleKeyEvent("2:d")

            console.log("release")
        }
    };
}

GamePad.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  const App = withStyles(styles)(GamePad);
  
  export default App;
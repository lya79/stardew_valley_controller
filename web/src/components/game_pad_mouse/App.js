import React from 'react';
import ReactNipple from 'react-nipple';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import DebugView from 'react-nipple/lib/DebugView';

const styles = theme => ({
    fab: {
      position: 'fixed',
      bottom:100+16+16,
      left:16,
    },
});

class GamePad extends React.Component {
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
                        width: 100,
                        height: 100,
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
        this.props.handleKeyEvent("2:mouse_xy_release")
        if(data.direction!==undefined){ // 方向
            if(data.angle.degree>=0 && data.angle.degree<=22.5){ // right
                this.props.handleKeyEvent("1:mouse_x_right")
            }else if(data.angle.degree>=337.5){// right
                this.props.handleKeyEvent("1:mouse_x_right")
            }else if(data.angle.degree>=22.5 && data.angle.degree<=67.5){ // right+up
                this.props.handleKeyEvent("1:mouse_x_right")
                this.props.handleKeyEvent("1:mouse_y_up")
            }else if(data.angle.degree>=67.5 && data.angle.degree<=112.5){ // up
                this.props.handleKeyEvent("1:mouse_y_up")
            }else if(data.angle.degree>=112.5 && data.angle.degree<=157.5){ // left+up
                this.props.handleKeyEvent("1:mouse_x_left")
                this.props.handleKeyEvent("1:mouse_y_up")
            }else if(data.angle.degree>=157.5 && data.angle.degree<=202.5){// left
                this.props.handleKeyEvent("1:mouse_x_left")
            }else if(data.angle.degree>=202.5 && data.angle.degree<=247.5){// left+down
                this.props.handleKeyEvent("1:mouse_x_left")
                this.props.handleKeyEvent("1:mouse_y_down")
            }else if(data.angle.degree>=247.5 && data.angle.degree<=292.5){// down
                this.props.handleKeyEvent("1:mouse_y_down")
            }else if(data.angle.degree>=292.5 && data.angle.degree<=337.5){ // right+down
                this.props.handleKeyEvent("1:mouse_x_right")
                this.props.handleKeyEvent("1:mouse_y_down")
            }else{
                console.log("degree: "+data.angle.degree)
            }
        }
    };
}

GamePad.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  const App = withStyles(styles)(GamePad);
  
  export default App;
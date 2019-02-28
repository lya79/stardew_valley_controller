import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Game_pad_pos from './game_pad_pos/App'; // 角色移動
import Game_pad_mouse from './game_pad_mouse/App'; // 角色移動
import Btn_backpack from './btn_backpack/App'; // 背包
import Btn_jounmal from './btn_journal/App'; // 日誌
import Btn_map from './btn_map/App'; // 地圖
import Btn_item_row from './item_row/App'; // 道具欄
import Btn_left_mouse from './btn_left_mouse/App'; //滑鼠 左
import Btn_right_mouse from './btn_right_mouse/App'; //滑鼠 右
import WebQRCode from './qrcode/App'; //滑鼠 右
import Hidden from '@material-ui/core/Hidden';
import QueryIP from './HttpMethods/QueryIP';


// 上、下、左、右:人物移動
// E: 背包
// C、左鍵:使用工具
// C、左鍵(長按):釣魚拋出、檢查、進屋子、與NPC對話
// X、右鍵:使用道具 ex:吃'、拿(籠子、收割)
// F:日誌
// M:地圖
// 0、1、2、3、4、5、6、7、8、9、0、-、=:切換物品欄位

const styles = theme => ({
});

var ws; // TODO 改用 state儲存
var connet;// TODO 改用 state儲存

class App extends React.Component {
    constructor() {
        super();

        connet = false;

        // this.state = {
        //     addr: '',
        // };
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
                // self.setState({
                //     addr: '',
                // });
                return;
            }
    
            console.log('success QueryIP:'+ip);
            // self.setState({
            //     addr: ip,
            // });

            if (window.WebSocket === undefined) {
                alert("Your browser does not support WebSockets."); // TODO 增加 Dialog顯示訊息
            } else {
                // ws = self.initWS();
                console.log("initWS");
                var host = ip; // '192.168.0.14';// ip
                console.log("WebSocket:"+host);
                var socket = new WebSocket("ws://"+host+":3006/ws"); 
                socket.onopen = function () {
                    connet = true;
                    console.log("Socket is open.");
                };
                socket.onmessage = function (e) {
                    console.log("Received data.", e.data);
                }
                socket.onclose = function () {
                    connet = false;
                    console.log("Socket closed.");
                    setTimeout(function () {
                        self.handleQueryIP()
                    }, 3000);
                }

                ws = socket
            }
        }
        QueryIP(callbackSignIn);
    };

    // initWS = () => {
    //     console.log("initWS");
    //     var host = window.location.hostname
    //     console.log("WebSocket:"+host);
    //     var socket = new WebSocket("ws://"+host+":3006/ws"); 
    //     socket.onopen = function () {
    //         connet = true;
    //         console.log("Socket is open.");
    //     };
    //     socket.onmessage = function (e) {
    //         console.log("Received data.", e.data);
    //     }
    //     socket.onclose = function () {
    //         connet = false;
    //         console.log("Socket closed.");
    //         setTimeout(function () {
    //             this.initWS()
    //         }, 3000);
    //     }
    //     return socket;
    // }

    handleKeyEvent = (data) => {
        console.log("send event:"+data);   
        if(!connet){
            console.log("not connect");
            return
        }
        ws.send(data); 
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Hidden mdUp> 
                    <Game_pad_pos handleKeyEvent={this.handleKeyEvent}/>
                    <Game_pad_mouse handleKeyEvent={this.handleKeyEvent}/>
                    <Btn_map handleKeyEvent={this.handleKeyEvent}/> 
                    <Btn_jounmal handleKeyEvent={this.handleKeyEvent}/>
                    <Btn_backpack handleKeyEvent={this.handleKeyEvent}/>
                    <Btn_right_mouse handleKeyEvent={this.handleKeyEvent}/>
                    <Btn_left_mouse handleKeyEvent={this.handleKeyEvent}/>
                    <Btn_item_row handleKeyEvent={this.handleKeyEvent}/>
                </Hidden>

                <Hidden smDown>
                    <WebQRCode />
                </Hidden>
            </div>
        );
    }
}

export default withStyles(styles)(App);
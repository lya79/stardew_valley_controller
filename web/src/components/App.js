import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Game_pad from './game_pad/App'; // 角色移動
import Btn_backpack from './btn_backpack/App'; // 背包
import Btn_jounmal from './btn_journal/App'; // 日誌
import Btn_map from './btn_map/App'; // 地圖
import Btn_item_row from './item_row/App'; // 道具欄
import Btn_left_mouse from './btn_left_mouse/App'; //滑鼠 左
import Btn_right_mouse from './btn_right_mouse/App'; //滑鼠 右


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

var ws;

class App extends React.Component {
    constructor() {
        super();
        if (window.WebSocket === undefined) {
            alert("Your browser does not support WebSockets."); // TODO 增加 Dialog顯示訊息
        } else {
            console.log("???ws:"+ws);
            console.log("???ws === 'undefined':"+ws === "undefined"); 
            console.log("???ws == 'undefined':"+ws == "undefined"); 
            console.log("???ws === undefined:"+ws === undefined); 
            console.log("???ws == undefined:"+ws == undefined);
            console.log("???ws === null:"+ws === null);
            console.log("???ws == null:"+ws == null);
            ws = this.initWS();
        }
    
    }    

    handleKeyEvent = (data) => {
        console.log("send event:"+data);
        // socket.send(data); 
    };

    initWS = () => {
        var socket = new WebSocket("ws://localhost:3006/ws"); 
        socket.onopen = function () {
            console.log("Socket is open.");
            socket.send("test send 1 "); 
            socket.send("test send 2 ");
            socket.send("test send 3 ");  
        };
        socket.onmessage = function (e) {
            console.log("Received data.", e.data);
        }
        socket.onclose = function () {
            console.log("Socket closed.");
            setTimeout(function () {
                this.initWS()
            }, 5000);
        }
        return socket;
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Game_pad handleKeyEvent={this.handleKeyEvent}/>

                <Btn_map />
                <Btn_jounmal />
                <Btn_backpack />

                <Btn_right_mouse />

                <Btn_left_mouse />

                
                <Btn_item_row />
            </div>
        );
    }
}

export default withStyles(styles)(App);
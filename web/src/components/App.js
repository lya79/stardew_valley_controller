import React from 'react';
import Game_pad from './game_pad/App';


// 上、下、左、右:人物移動
// E: 背包
// C、左鍵:使用工具
// C、左鍵(長按):釣魚拋出、檢查、進屋子、與NPC對話
// X、右鍵:使用道具 ex:吃'、拿(籠子、收割)
// F:日誌
// M:地圖
// 0、1、2、3、4、5、6、7、8、9、0、-、=:切換物品欄位

export default class App extends React.Component {
    state = {
        data: {}
    };
    render() {
        return (
            <Game_pad />
        );
    }
}
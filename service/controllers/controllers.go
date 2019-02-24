package controllers

import (
	"log"
	ctrl_pos "stardew_valley_controller/service/controllers/ctrl_pos"

	"github.com/astaxie/beego"
)

var ctrlPos *ctrl_pos.Pos

type Controllers struct {
	beego.Controller
}

// @router /action [get]
func (this *Controllers) Action() {
	log.Println("action")

	action := this.GetString("action")
	press := this.GetString("press")
	log.Println("action:", action, ", press:", press)

	var trigger bool

	trigger = false
	trigger = trigger || action == ctrl_pos.KEY_UP
	trigger = trigger || action == ctrl_pos.KEY_DOWN
	trigger = trigger || action == ctrl_pos.KEY_LEFT
	trigger = trigger || action == ctrl_pos.KEY_RIGHT
	if trigger {
		if ctrlPos == nil {
			ctrlPos = &ctrl_pos.Pos{}
		}
	}

	this.ServeJSON()
}

/*
https://github.com/go-vgo/robotgo

上、下、左、右:人物移動
E: 背包
C、左鍵:使用工具
C、左鍵(長按):釣魚拋出、檢查、進屋子、與NPC對話
X、右鍵:使用道具 ex:吃'、拿(籠子、收割)
F:日誌
M:地圖
0、1、2、3、4、5、6、7、8、9、0、-、=:切換物品欄位
*/

// func main() {
// 	quit := make(chan bool)

// 	// w s a d : 角色移動
// 	s := ctrl_pos.Pos{}
// 	s.Init()

// 	<-quit
// }

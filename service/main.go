package main

import (
	_ "stardew_valley_controller/service/routers"

	"github.com/astaxie/beego"

	"stardew_valley_controller/service/websocket"
)

func main() {
	go func() {
		service := websocket.CmdService{}
		service.Init(3006)
	}()

	beego.Run()
}

package main

import (
	_ "stardew_valley_controller/service/routers"

	"github.com/astaxie/beego"
)

func main() {
	beego.Run()
}

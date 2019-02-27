package controllers

import (
	"log"

	"github.com/astaxie/beego"
)

type Controllers struct {
	beego.Controller
}

// @router /todo-list/query [get]
func (this *Controllers) Query() {
	log.Println("Query")

	this.Data["json"] = "hello"
	this.ServeJSON()
}

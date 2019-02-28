package controllers

import (
	"fmt"
	"log"
	"net"

	"github.com/astaxie/beego"
)

type Controllers struct {
	beego.Controller
}

type Data struct {
	IP string
}

// @router /query/ip [get]
func (this *Controllers) Query() {
	log.Println("Query IP")

	ip, _ := getIP()
	fmt.Println("ip:", ip)

	d := Data{}
	d.IP = ip

	this.Data["json"] = d
	this.ServeJSON()
}

func getIP() (string, error) {
	conn, err := net.Dial("udp", "8.8.8.8:80")
	if err != nil {
		fmt.Println("err:", err)
		return "", err
	}
	defer conn.Close()
	localAddr := conn.LocalAddr().(*net.UDPAddr)
	return localAddr.IP.String(), nil
}

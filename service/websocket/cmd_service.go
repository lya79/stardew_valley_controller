package websocket

import (
	"log"
	"net/http"
	"strconv"
	"strings"

	"github.com/gorilla/websocket"

	ctrl_audio "stardew_valley_controller/service/websocket/ctrl_audio"
	ctrl_item "stardew_valley_controller/service/websocket/ctrl_item"
	ctrl_mouse "stardew_valley_controller/service/websocket/ctrl_mouse"
	ctrl_pos "stardew_valley_controller/service/websocket/ctrl_pos"
)

type CmdService struct {
	cmdList   chan []byte
	ctrlPos   ctrl_pos.Func
	ctrlItem  ctrl_item.Func
	ctrlMouse ctrl_mouse.Func
	ctrlAudio ctrl_audio.Func
}

func (this *CmdService) Init(port int) {
	this.cmdList = make(chan []byte)

	this.ctrlPos = ctrl_pos.Func{}
	this.ctrlItem = ctrl_item.Func{}
	this.ctrlMouse = ctrl_mouse.Func{}
	this.ctrlAudio = ctrl_audio.Func{}

	this.ctrlPos.Init()
	this.ctrlItem.Init()
	this.ctrlMouse.Init()

	go this.exec()

	http.Handle("/ws", http.HandlerFunc(this.wsHandler))
	http.ListenAndServe(":"+strconv.Itoa(port), nil)
}

func (this *CmdService) wsHandler(w http.ResponseWriter, r *http.Request) {
	c, err := websocket.Upgrade(w, r, w.Header(), 1024, 1024)
	if err != nil {
		http.Error(w, "Could not open websocket connection", http.StatusBadRequest)
	}
	go this.connHandler(c)
}

func (this *CmdService) connHandler(c *websocket.Conn) {
	log.Println("new conn")

	for {
		messageType, payload, err := c.ReadMessage()
		if err != nil {
			log.Println("err, ReadMessage:", err)
			return
		}

		if messageType != websocket.TextMessage {
			log.Println("err, messageType:", messageType)
			continue
		}

		if payload == nil || len(payload) == 0 {
			log.Println("err, payload == nil || len(payload) == 0")
			continue
		}

		this.cmdList <- payload

		// if err := c.WriteMessage(messageType, payload); err != nil {
		// 	log.Println("err, WriteMessage:", err)
		// 	return
		// }
	}
}

func (this *CmdService) exec() {
	for {
		cmd := <-this.cmdList
		cmdStr := string(cmd[:])
		log.Println("exec:", cmdStr)

		cmdArray := strings.Split(cmdStr, ":")
		if len(cmdArray) != 2 {
			log.Println("err, len(cmdArray) != 2, cmdStr:", cmdStr)
			continue
		}

		event, err := strconv.Atoi(cmdArray[0]) // 0:click, 1:down, 2:up
		if err != nil {
			log.Println("err, strconv.Atoi(cmdArray[0]), cmdArray[0]:", cmdArray[0], ", err:", err)
			continue
		}

		if event < 0 || event > 2 {
			log.Println("err, event < 0 || event > 2, cmdStr:", cmdStr)
			continue
		}

		action := cmdArray[1]

		skip := false
		skip = skip || (event == 1 || event == 2) && this.ctrlPos.Action(action, event == 1)
		skip = skip || this.ctrlMouse.Action(action, event)
		skip = skip || this.ctrlItem.Action(action, event)
		skip = skip || event == 0 && this.ctrlAudio.Action(action)
	}
}

package websocket

import (
	"log"
	"net/http"
	"strconv"
	"strings"

	"github.com/gorilla/websocket"

	ctrl_pos "stardew_valley_controller/service/websocket/ctrl_pos"
)

type CmdService struct {
	cmdList chan []byte
	ctrlPos ctrl_pos.Pos
}

func (this *CmdService) Init(port int) {
	this.cmdList = make(chan []byte)
	this.ctrlPos = ctrl_pos.Pos{}

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
	/*
		w:上
		s:下
		a:左
		d:右
		E:背包
		C、左鍵:使用工具
		C、左鍵(長按):釣魚拋出、檢查、進屋子、與NPC對話
		X、右鍵:使用道具 ex:吃'、拿(籠子、收割)
		F:日誌
		M:地圖
		0、1、2、3、4、5、6、7、8、9、0、-、=:切換物品欄位
	*/
	/*
		封包格式如下(字串):
			事件:動作
		ex:
			按壓 w按鍵, 則 Payload如下.
			1:w
	*/

	for {
		cmd := <-this.cmdList
		cmdStr := string(cmd[:])
		log.Println("exec:", cmdStr)

		cmdArray := strings.Split(cmdStr, ":")
		if len(cmdArray) != 2 {
			log.Println("err, len(cmdArray) != 2, cmdStr:", cmdStr)
			continue
		}

		event, err := strconv.Atoi(cmdArray[0]) // 0:click, 1:press, 2:release
		if err != nil {
			log.Println("err, strconv.Atoi(cmdArray[0]), cmdArray[0]:", cmdArray[0], ", err:", err)
			continue
		}

		if event < 0 || event > 2 {
			log.Println("err, event < 0 || event > 2, cmdStr:", cmdStr)
			continue
		}

		action := cmdArray[1]

		log.Println("action:", action, ", press:", event)

		if (event == 1 || event == 2) && this.ctrlPos.Action(action, event == 1) {
			continue
		}
	}
}

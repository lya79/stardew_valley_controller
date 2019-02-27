package ctrl_mouse

import (
	"log"
	"time"

	"github.com/go-vgo/robotgo"
)

/*

滑鼠左鍵click
0:mouse_left

滑鼠左鍵down
1:mouse_left

滑鼠左鍵up
2:mouse_left

*/

const MOUSE_LEFT = "mouse_left"
const MOUSE_RIGHT = "mouse_right"

type Func struct {
	stop       bool
	mouseLeft  int
	mouseRight int
}

func (this *Func) Stop() {
	this.stop = true
}

func (this *Func) contain(action string) bool {
	contain := false
	contain = contain || action == MOUSE_LEFT
	contain = contain || action == MOUSE_RIGHT
	return contain
}

func (this *Func) Action(action string, event int) bool {
	if !this.contain(action) {
		log.Println("fail action:", action, ", event:", event)
		return false
	}

	log.Println("action:", action, ", event:", event)

	if action == MOUSE_LEFT {
		this.handleMouseLeft(event)
	} else if action == MOUSE_RIGHT {
		this.handleMouseRight(event)
	}

	return true
}

func (this *Func) handleMouseLeft(event int) {
	this.mouseLeft = event
}

func (this *Func) handleMouseRight(event int) {
	this.mouseRight = event
}

func (this *Func) Init() {
	log.Println("init")

	this.mouseLeft = -1
	this.mouseRight = -1

	this.stop = false
	go func() {
		for {
			if this.stop {
				break
			}
			if this.mouseLeft == 1 {
				robotgo.MouseToggle("down", "left")
			} else if this.mouseLeft == 2 {
				robotgo.MouseToggle("up", "left")
				this.mouseLeft = -1
			} else if this.mouseLeft == 0 {
				robotgo.MouseToggle("down", "left")
				robotgo.MouseToggle("up", "left")
				this.mouseLeft = -1
			}
			time.Sleep(16 * time.Millisecond)
		}
	}()
	go func() {
		for {
			if this.stop {
				break
			}
			if this.mouseRight == 1 {
				robotgo.MouseToggle("down", "right")
			} else if this.mouseRight == 2 {
				robotgo.MouseToggle("up", "right")
				this.mouseRight = -1
			} else if this.mouseRight == 0 {
				robotgo.MouseToggle("down", "right")
				robotgo.MouseToggle("up", "right")
				this.mouseRight = -1
			}
			time.Sleep(16 * time.Millisecond)
		}
	}()
}

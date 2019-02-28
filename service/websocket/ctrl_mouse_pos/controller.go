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

// const MOUSE_LEFT = "mouse_left"
// const MOUSE_RIGHT = "mouse_right"

const MOUSE_X_LEFT = "mouse_x_left"
const MOUSE_X_RIGHT = "mouse_x_right"
const MOUSE_Y_UP = "mouse_y_up"
const MOUSE_Y_DOWN = "mouse_y_down"
const MOUSE_XY_RELEASE = "mouse_xy_release"

const offset = 6

type Func struct {
	stop        bool
	mouseX      string
	mouseXEvent int
	mouseY      string
	mouseYEvent int
}

func (this *Func) Stop() {
	this.stop = true
}

func (this *Func) contain(action string) bool {
	contain := false
	contain = contain || action == MOUSE_X_LEFT
	contain = contain || action == MOUSE_X_RIGHT
	contain = contain || action == MOUSE_Y_UP
	contain = contain || action == MOUSE_Y_DOWN
	contain = contain || action == MOUSE_XY_RELEASE
	return contain
}

func (this *Func) Action(action string, event int) bool {
	log.Println("check mouse:")

	if !this.contain(action) {
		log.Println("fail action:", action, ", event:", event)
		return false
	}

	log.Println("action:", action, ", event:", event)

	if action == MOUSE_X_LEFT {
		this.handleMouseX(action, event)
	} else if action == MOUSE_X_RIGHT {
		this.handleMouseX(action, event)
	} else if action == MOUSE_Y_UP {
		this.handleMouseY(action, event)
	} else if action == MOUSE_Y_DOWN {
		this.handleMouseY(action, event)
	} else if action == MOUSE_XY_RELEASE {
		this.handleMouseX("", event)
		this.handleMouseY("", event)
	}

	return true
}

func (this *Func) handleMouseX(action string, event int) {
	this.mouseX = action
	this.mouseXEvent = event
}

func (this *Func) handleMouseY(action string, event int) {
	this.mouseY = action
	this.mouseYEvent = event
}

func (this *Func) Init() {
	log.Println("init")

	this.mouseXEvent = -1
	this.mouseYEvent = -1

	this.stop = false
	go func() {
		for {
			if this.stop {
				break
			}
			if this.mouseXEvent == 1 {
				if this.mouseX == MOUSE_X_LEFT {
					x, y := robotgo.GetMousePos()
					robotgo.MoveMouse(x-offset, y)
				} else if this.mouseX == MOUSE_X_RIGHT {
					x, y := robotgo.GetMousePos()
					robotgo.MoveMouse(x+offset, y)
				}
			} else if this.mouseXEvent == 2 {
				this.mouseXEvent = -1
			}
			time.Sleep(10 * time.Millisecond)
		}
	}()
	go func() {
		for {
			if this.stop {
				break
			}
			if this.mouseYEvent == 1 {
				if this.mouseY == MOUSE_Y_UP {
					x, y := robotgo.GetMousePos()
					robotgo.MoveMouse(x, y-offset)
				} else if this.mouseY == MOUSE_Y_DOWN {
					x, y := robotgo.GetMousePos()
					robotgo.MoveMouse(x, y+offset)
				}
			} else if this.mouseYEvent == 2 {
				this.mouseYEvent = -1
			}
			time.Sleep(10 * time.Millisecond)
		}
	}()
}

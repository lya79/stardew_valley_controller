package controller

import (
	"log"
	"time"

	"github.com/go-vgo/robotgo"
)

const KEY_UP = "w"
const KEY_DOWN = "s"
const KEY_LEFT = "a"
const KEY_RIGHT = "d"

type Pos struct {
	stop            bool
	press_key_up    bool
	press_key_down  bool
	press_key_left  bool
	press_key_right bool
}

func (this *Pos) Stop() {
	this.stop = true
}

func (this *Pos) contain(action string) bool {
	contain := false
	contain = contain || action == KEY_UP
	contain = contain || action == KEY_DOWN
	contain = contain || action == KEY_LEFT
	contain = contain || action == KEY_RIGHT
	return contain
}

func (this *Pos) Action(action string, press bool) bool {
	if !this.contain(action) {
		log.Println("fail action:", action, ", press:", press)
		return false
	}

	log.Println("action:", action, ", press:", press)

	if action == KEY_UP {
		this.pressKeyUp(press)
	} else if action == KEY_DOWN {
		this.pressKeyDown(press)
	} else if action == KEY_LEFT {
		this.pressKeyLeft(press)
	} else if action == KEY_RIGHT {
		this.pressKeyRight(press)
	}

	return true
}

func (this *Pos) pressKeyUp(press bool) {
	this.press_key_up = press
}

func (this *Pos) pressKeyDown(press bool) {
	this.press_key_down = press
}

func (this *Pos) pressKeyLeft(press bool) {
	this.press_key_left = press
}

func (this *Pos) pressKeyRight(press bool) {
	this.press_key_right = press
}

func (this *Pos) Init() {
	log.Println("init")
	this.stop = false
	go func() {
		key := KEY_UP
		for {
			if this.stop {
				break
			}
			if this.press_key_up {
				robotgo.KeyToggle(key, "down")
			} else {
				robotgo.KeyToggle(key, "up")
			}
			time.Sleep(16 * time.Millisecond)
		}
	}()
	go func() {
		key := KEY_DOWN
		for {
			if this.stop {
				break
			}
			if this.press_key_down {
				robotgo.KeyToggle(key, "down")
			} else {
				robotgo.KeyToggle(key, "up")
			}
			time.Sleep(16 * time.Millisecond)
		}
	}()
	go func() {
		key := KEY_LEFT
		for {
			if this.stop {
				break
			}
			if this.press_key_left {
				robotgo.KeyToggle(key, "down")
			} else {
				robotgo.KeyToggle(key, "up")
			}
			time.Sleep(16 * time.Millisecond)
		}
	}()
	go func() {
		key := KEY_RIGHT
		for {
			if this.stop {
				break
			}
			if this.press_key_right {
				robotgo.KeyToggle(key, "down")
			} else {
				robotgo.KeyToggle(key, "up")
			}
			time.Sleep(16 * time.Millisecond)
		}
	}()
}

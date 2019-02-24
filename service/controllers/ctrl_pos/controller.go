package controller

import (
	"log"

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

func (this *Pos) PressKeyUp(press bool) {
	this.press_key_up = press
}

func (this *Pos) PressKeyDown(press bool) {
	this.press_key_down = press
}

func (this *Pos) PressKeyLeft(press bool) {
	this.press_key_left = press
}

func (this *Pos) PressKeyRight(press bool) {
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
			}
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
			}
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
			}
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
			}
		}
	}()
}

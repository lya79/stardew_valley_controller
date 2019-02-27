package controller

import (
	"log"
	"time"

	"github.com/go-vgo/robotgo"
)

/*

click "w"按鍵
0:w

長按 "w"按鍵
1:w

釋放 "w"按鍵
2:w

*/

const KEY_UP = "w"
const KEY_DOWN = "s"
const KEY_LEFT = "a"
const KEY_RIGHT = "d"

type Func struct {
	stop            bool
	press_key_up    int
	press_key_down  int
	press_key_left  int
	press_key_right int
}

func (this *Func) Stop() {
	this.stop = true
}

func (this *Func) contain(action string) bool {
	contain := false
	contain = contain || action == KEY_UP
	contain = contain || action == KEY_DOWN
	contain = contain || action == KEY_LEFT
	contain = contain || action == KEY_RIGHT
	return contain
}

func (this *Func) Action(action string, press bool) bool {
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

func (this *Func) pressKeyUp(press bool) {
	if press {
		this.press_key_up = 1
	} else {
		this.press_key_up = 2
	}
}

func (this *Func) pressKeyDown(press bool) {
	if press {
		this.press_key_down = 1
	} else {
		this.press_key_down = 2
	}
}

func (this *Func) pressKeyLeft(press bool) {
	if press {
		this.press_key_left = 1
	} else {
		this.press_key_left = 2
	}
}

func (this *Func) pressKeyRight(press bool) {
	if press {
		this.press_key_right = 1
	} else {
		this.press_key_right = 2
	}
}

func (this *Func) Init() {
	log.Println("init")

	this.press_key_up = -1
	this.press_key_down = -1
	this.press_key_left = -1
	this.press_key_right = -1

	this.stop = false
	go func() {
		key := KEY_UP
		for {
			if this.stop {
				break
			}
			if this.press_key_up == 1 {
				robotgo.KeyToggle(key, "down")
			} else if this.press_key_up == 2 {
				robotgo.KeyToggle(key, "up")
				this.press_key_up = -1
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
			if this.press_key_down == 1 {
				robotgo.KeyToggle(key, "down")
			} else if this.press_key_down == 2 {
				robotgo.KeyToggle(key, "up")
				this.press_key_down = -1
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
			if this.press_key_left == 1 {
				robotgo.KeyToggle(key, "down")
			} else if this.press_key_left == 2 {
				robotgo.KeyToggle(key, "up")
				this.press_key_left = -1
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
			if this.press_key_right == 1 {
				robotgo.KeyToggle(key, "down")
			} else if this.press_key_right == 2 {
				robotgo.KeyToggle(key, "up")
				this.press_key_right = -1
			}
			time.Sleep(16 * time.Millisecond)
		}
	}()
}

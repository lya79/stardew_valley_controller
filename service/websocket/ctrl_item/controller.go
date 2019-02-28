package ctrl_func

import (
	"log"
	"time"

	"github.com/go-vgo/robotgo"
)

/*

click "數字1"按鍵
0:num1

TODO 等待測試
長按 "c"按鍵
1:c

TODO
釋放 "c"按鍵
2:c

備註:
	長按功能只提供給 "c"按鍵
mmm112
*/

const KEY_NUM_1 = "1"
const KEY_NUM_2 = "2"
const KEY_NUM_3 = "3"
const KEY_NUM_4 = "4"
const KEY_NUM_5 = "5"
const KEY_NUM_6 = "6"
const KEY_NUM_7 = "7"
const KEY_NUM_8 = "8"
const KEY_NUM_9 = "9"
const KEY_NUM_0 = "0"
const KEY_NUM_DASH = "-"
const KEY_NUM_EQUAL = "="
const KEY_E = "e"
const KEY_F = "f"
const KEY_M = "m"
const KEY_C = "c"
const KEY_X = "x"

type Func struct {
	stop        bool
	press_key_c int
}

func (this *Func) Stop() {
	this.stop = true
}

func (this *Func) contain(action string) bool {
	contain := false
	contain = contain || action == KEY_NUM_1
	contain = contain || action == KEY_NUM_2
	contain = contain || action == KEY_NUM_3
	contain = contain || action == KEY_NUM_4
	contain = contain || action == KEY_NUM_5
	contain = contain || action == KEY_NUM_6
	contain = contain || action == KEY_NUM_7
	contain = contain || action == KEY_NUM_8
	contain = contain || action == KEY_NUM_9
	contain = contain || action == KEY_NUM_0
	contain = contain || action == KEY_NUM_DASH
	contain = contain || action == KEY_NUM_EQUAL
	contain = contain || action == KEY_E
	contain = contain || action == KEY_F
	contain = contain || action == KEY_M
	contain = contain || action == KEY_C
	contain = contain || action == KEY_X
	return contain
}

func (this *Func) Action(action string, event int) bool {
	log.Println("check item:")

	if !this.contain(action) {
		log.Println("fail action:", action)
		return false
	}

	log.Println("action:", action)

	if action == KEY_C {
		this.pressKeyC(event)
	} else {
		log.Println("ccc action:", action)
		robotgo.KeyToggle(action, "down")
		robotgo.KeyToggle(action, "up")
	}

	return true
}

func (this *Func) pressKeyC(event int) {
	this.press_key_c = event
}

func (this *Func) Init() {
	log.Println("init")

	this.press_key_c = -1

	this.stop = false
	go func() {
		key := KEY_C
		for {
			if this.stop {
				break
			}
			if this.press_key_c == 1 {
				robotgo.KeyToggle(key, "down")
			} else if this.press_key_c == 2 {
				robotgo.KeyToggle(key, "up")
				this.press_key_c = -1
			} else if this.press_key_c == 0 {
				robotgo.KeyTap(key)
				this.press_key_c = -1
			}
			time.Sleep(10 * time.Millisecond)
		}
	}()
}

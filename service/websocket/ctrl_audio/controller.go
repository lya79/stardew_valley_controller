package ctrl_audio

import (
	"log"

	"github.com/go-vgo/robotgo"
)

/*

觸發音量增加
0:audio_vol_up

*/

const KEY_MUTE = "audio_mute"
const KEY_UP = "audio_vol_up"
const KEY_DOWN = "audio_vol_down"

type Func struct {
}

func (this *Func) contain(action string) bool {
	contain := false
	contain = contain || action == KEY_MUTE
	contain = contain || action == KEY_UP
	contain = contain || action == KEY_DOWN
	return contain
}

func (this *Func) Action(action string) bool {
	log.Println("check audio:")

	if !this.contain(action) {
		log.Println("fail action:", action)
		return false
	}

	log.Println("action:", action)
	robotgo.KeyTap(action)
	return true
}

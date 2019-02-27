package ctrl_audio

import (
	"testing"
	"time"
)

func Test_audio(t *testing.T) {
	time.Sleep(5 * time.Second)

	f := Func{}

	for i := 0; i < 10; i++ {
		f.Action(KEY_UP)
		time.Sleep(1 * time.Second)
	}

	for i := 0; i < 10; i++ {
		f.Action(KEY_DOWN)
		time.Sleep(1 * time.Second)
	}

	for i := 0; i < 10; i++ {
		f.Action(KEY_MUTE)
		time.Sleep(1 * time.Second)
	}

	time.Sleep(10 * time.Second)
}

input.onSound(DetectedSound.Loud, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Target)
})
input.onSound(DetectedSound.Quiet, function () {
    if (start > 0) {
        time = input.runningTime() - start
        start = 0
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(time / 1000)
    }
})
let time = 0
let start = 0
input.setSoundThreshold(SoundThreshold.Loud, 150)
start = 0

input.onButtonPressed(Button.A, function () {
    basic.showNumber(score)
})
let score = 0
score = 0
basic.showNumber(score)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        score += 1
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.No)
        basic.pause(100)
    }
})

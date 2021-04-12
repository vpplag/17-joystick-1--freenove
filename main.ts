input.onButtonPressed(Button.A, function () {
    CalibrateX = P2In
    CalibrateY = P1In
})
let y = 0
let x = 0
let P1In = 0
let P2In = 0
let CalibrateY = 0
let CalibrateX = 0
CalibrateX = 512
CalibrateY = 512
basic.forever(function () {
    P1In = pins.analogReadPin(AnalogPin.P1)
    P2In = pins.analogReadPin(AnalogPin.P2)
    music.stopAllSounds()
    led.unplot(x, y)
    x = Math.map(P2In, 0, CalibrateX * 2, 4, 0)
    y = Math.map(P1In, 0, CalibrateY * 2, 0, 4)
    led.plot(x, y)
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        music.ringTone(262)
    }
})

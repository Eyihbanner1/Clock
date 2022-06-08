const secondHand = document.querySelector('.hand-second')
const minuteHand = document.querySelector('.hand-minute')
const hourHand = document.querySelector('.hand-hour')

function setTime() {
    const time = new Date()
    const seconds = time.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = time.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360) + 90
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = time.getHours()
    const hoursDegrees = (hours * 30) + (minutes / 2) + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setTime, 1000)
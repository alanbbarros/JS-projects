

let countdown = () => {
    let today = new Date()
    let newYear = new Date(today.getFullYear() + 1, 0, 1, 0, 0, 0)

    let daysLeft = Math.floor((newYear - today)/ (1000 *3600 * 24))
    let hoursLeft = Math.floor((newYear - today) / (1000 * 3600) % 24)
    let minutesLeft = Math.floor((newYear - today) / (1000 * 60) % 60)
    let secondsLeft = Math.floor((newYear - today) / (1000) % 60)
    
    
    
    document.getElementById('days').innerText = daysLeft
    document.getElementById('hours').innerText = hoursLeft
    document.getElementById('minutes').innerText = minutesLeft
    document.getElementById('seconds').innerText = secondsLeft
    
}


setInterval(countdown, 1000)

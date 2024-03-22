let digitalElement = document.querySelector(".digital");
let secondElement = document.querySelector(".p_s");
let minuteElement = document.querySelector(".p_m");
let hourElement = document.querySelector(".p_h");

function updateClock() {
    //PARTE DIGITAL

    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if (second <= 9 || minute <= 9 || hour <= 9) {
        digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
    } else {
        digitalElement.innerHTML = `${hour}:${minute}:${second}`;
    }

    //PARTE ANALÓGICA

    let secondDeg = (360 / 60) * second - 90;
    let minuteDeg = (360 / 60) * minute - 90;
    let hourDeg = (360 / 12) * hour - 90;

    secondElement.style.transform = `rotate(${secondDeg}deg)`;
    minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
    hourElement.style.transform = `rotate(${hourDeg}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();

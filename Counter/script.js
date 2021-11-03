const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const examTime = "25 june 2022";
function countdown() {
    const examDate = new Date(examTime);
    const currentDate = new Date();

    const totalSecond = (examDate - currentDate) / 1000;

    const days = 13;
    const hours = Math.floor(totalSecond/ 3600) % 24;
    const mins = Math.floor(totalSecond/ 60) % 60;
    const seconds = Math.floor(totalSecond) %60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}
function formatTime(time) {
    return (time < 10 ? '0' : '') + time ;

}

countdown();

setInterval(countdown,1000);

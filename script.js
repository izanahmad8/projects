const birthDay = '12 Jan 2024';
const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEL =document.getElementById('seconds');
function countdown(){
    const birthDayDate = new Date(birthDay);
    const currentDate = new Date();
    const totalSeconds = (birthDayDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days,hours,mins,seconds);
    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minsEL.innerHTML = mins;
    secondsEL.innerHTML = seconds;
}
countdown();
setInterval(countdown,1000);
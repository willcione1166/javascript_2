const hourElement = document.getElementById("hours");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");




function updateClock() {
    const now = new Date();
    const hr = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const ampm = now.getHours() >= 12? "PM" : "AM";
  
    hourElement.innerHTML = hr;
    minuteElement.innerHTML = min;
    secondElement.innerHTML = sec;
    ampmElement.innerHTML = ampm;
    setTimeout(updateClock, 1000);
    const time = hr + ":" + min + ":" + sec + " " + ampm;
    console.log(time)
};updateClock();










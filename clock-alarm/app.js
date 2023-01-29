const timer = document.getElementById("timer");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
const startStop = document.getElementById("startStop");


let currentTime;
let alarmEl;
let activeAlarm = false;
let sound = new Audio("alarm.mp3");
sound.loop = true;

function showTimer() {
   let now = new Date();
   let hours = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds();

   if (hours < 10 ) {
    hours = "0" + hours; 
    
   }
   if (minutes < 10) {
    minutes = "0" + minutes;
   }
   if (seconds < 10) {
    seconds = "0" + seconds;
   }
   currentTime = hours + ":" + minutes + ":" + seconds ;
   timer.innerHTML = currentTime;
   console.log(currentTime);
}; 

function showTime(){
    let nows = new Date();
    currentTime = nows.toLocaleTimeString();
     if(currentTime === alarmEl){
        sound.play()
     }
    timer.textContent = currentTime;
    setTimeout(showTime, 1000)
    console.log(currentTime);

} showTime();

function startTimer() {
   if (activeAlarm === false) {
    activeAlarm = true;
    sound.play();
    alarmEl = setInterval(showTime, 1000);
   }
   else {
    activeAlarm = false;
    clearInterval(alarmEl);
   }
   console.log(activeAlarm);
};

function addMinSec(id){
    var select = id;
    var min =59;
    for ( i = 0; i <= min; i++) {
        select.options[select.options.length]= new Option(i < 10 ? "0" + i : i);
}};addMinSec(seconds);




function addHours(id){
    var select = id;
    var min =12;
    for ( i = 0; i <= min; i++) {
        select.options[select.options.length]= new Option (i < 10 ? "0" + i : i);
       
}};addHours(hours);
addMinSec(minutes);



 
startStop.onclick = function (){
    if(activeAlarm === false){
        hours.disabled = true;
        minutes.disabled = true;
        seconds.disabled = true;
        ampm.disabled = true;
       
        alramEl = hours.value + ": " + minutes.value + ": " + seconds.value + " " + ampm.value
        this.textContent = "Clear Alarm";
        activeAlarm = true;
}else{
    hours.disabled = false;
    minutes.disabled = false;
    seconds.disabled = false;
    ampm.disabled = false;
    this.textContent = "Start Alarm";
}}
 
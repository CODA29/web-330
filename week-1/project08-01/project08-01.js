"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Dagmawi Megra
      Date:   03/18/2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// Constructor function for the timer object class
function timer(min, sec){
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// Adding the runPause method to the timer object prototype
timer.prototype.runPause = function(timer, minBox, secBox){
  if(timer.timeID){
    window.clearInterval(this.timeID);
    timer.timeID = null;
  }else{
    timer.timeID = window.setInterval(countdown, 1000);
  }

  // Countdown function that updates the timer every second
  function countdown(){
    if(timer.seconds > 0){
      timer.seconds--;
    }else if(timer.minutes > 0){
      timer.minutes--;
      timer.seconds = 59;
    }else{
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    }
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

let myTimer = new timer(minBox.value, secBox.value);

// Onchange event handler for the minutes box
minBox.onchange = function(){
  myTimer.minutes = this.value;
}

// Onchange event handler for the seconds box
secBox.onchange = function(){
  myTimer.seconds = this.value;
}

// Onclick event handler for the runPauseTimer button
runPauseTimer.addEventListener("click", function(){
  myTimer.runPause(myTimer, minBox, secBox);
})


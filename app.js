
document.addEventListener("DOMContentLoaded", function() {

let seconds = 5;

let breakCounter = 2;
let focusCounter = 3;

let numOfSwitches = true;

userCounter = focusCounter

function secondsCounter() {
    
    if (seconds > 0) {
        seconds --;
    } else {
        userCounter --;
        seconds = 5;
    }

    if (userCounter === 0) {
        numOfSwitches = !numOfSwitches;
        switchCounter(numOfSwitches)
    }

    document.getElementById("counter").innerHTML = userCounter;
}

function switchCounter(numOfSwitches) {

    if (numOfSwitches) {
        userCounter = focusCounter;
        document.getElementById("switch-state").innerHTML = "<p>It's time to focus!</p>"
    }
    else
    {
        userCounter = breakCounter;
        document.getElementById("switch-state").innerHTML = "<p>Take a break gamle!</p>"
    }
    
}



setInterval(secondsCounter, 1000);
  
})

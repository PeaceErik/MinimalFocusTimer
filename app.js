
document.addEventListener("DOMContentLoaded", function() {

    
let focusCounter = 3;
let breakCounter = 2;
let seconds = 10;



function secondsCounter() {

    
    if (seconds > 0) {
        seconds --;
    } else {
        userCounter --;
        seconds = 10;
    }

    if (userCounter === 0) {
        
    }

    console.log(seconds)

}

document.getElementById("counter").innerHTML = focusCounter;
setInterval(secondsCounter, 1000);
  
})

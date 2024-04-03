
document.addEventListener("DOMContentLoaded", function() {

    
let focusCounter = 3;
let breakCounter = 2;
let seconds = 10;




function startTimer() {

    let focusTimer = true;

    if (focusTimer === true) {
        userCounter = focusCounter;
    } else {
        userCounter = breakCounter;
    }

    if (seconds > 0) {
        seconds --;
        console.log(seconds)
    } 
    else {
        seconds = 10;     
        userCounter --;

        if(userCounter === 0 && focusTimer === true) {
            focusTimer = false;
        } 
        else {
            focusTimer = true;
        } 
    }

    document.getElementById("counter").innerHTML=`${userCounter}`;
}



setInterval(startTimer, 1000);
  
})

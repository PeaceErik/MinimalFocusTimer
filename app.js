
let focusCounter = 3;
let seconds = 60;
let breakCounter = 2;


function startTimer() {


    if (seconds >= 0) {
        seconds --;
    } 
    else {
        seconds = 60;     
        userCounter --;
    }

    if (userCounter === 0) {
        userCounter = breakCounter;
    }
    else {
        userCounter = focusCounter;
    }

    document.getElementById("counter").innerHTML=`${userCounter}`;

}
  
setInterval(() => startTimer(), 1000)

// Run everything when document has loaded
document.addEventListener("DOMContentLoaded", function() {

// Setting seconds
let seconds = 5;

// Default counter values
let breakCounter = 2;
let focusCounter = 3;

// Default Timer state: true = focus timer
let numOfSwitches = true;
// Default Counter state
userCounter = focusCounter

// Putting my buttons into arrays
let focusBtns = document.querySelectorAll(".focus-btn");
let breakBtns = document.querySelectorAll(".break-btn");


function timeButtons(Event) {

    if (Event.target.classList.contains("focus-btn")) {
        focusCounter = Event.target.dataset.time;

        focusBtns.forEach(element => {
        element.classList.remove("active");
        });

        Event.target.classList.add("active");
    }    
    else 
    {
        breakCounter = Event.target.dataset.time;

        breakBtns.forEach(element => {
        element.classList.remove("active")
        });

        Event.target.classList.add("active")
    }
}

// Binding my focus buttons to the event on "click"
focusBtns.forEach(element => {
    element.addEventListener('click', timeButtons.bind(Event))
});

// Binding my break buttons to the event on "click"
breakBtns.forEach(element => {
    element.addEventListener('click', timeButtons.bind(Event))
})

// Function for decrementing seconds
// and decrementing the current counter,
// running the switchCounter function when current
// timer reaches 0.
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

    //displaying the current counter
    document.getElementById("counter").innerHTML = userCounter;
}

// Function for switching counter/timer state
function switchCounter(numOfSwitches) {

    if (numOfSwitches) {
        userCounter = focusCounter;
        // Displaying the "focus" message
        document.getElementById("switch-state").innerHTML = "<p class='state-msg'>time to focus!</p>"
    }
    else
    {
        userCounter = breakCounter;
        // Displaying the "break" message
        document.getElementById("switch-state").innerHTML = "<p class='state-msg'>take a break..</p>"
    }
    
}

// Setting the interval for the "secondsCounter" function
// 1000 ms = 1 second
setInterval(secondsCounter, 1000);
  
})




// Adding variables first
let clubName ="Game Club"
let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
  nextMeeting.textContent = "Our next meeting is Friday, November 5 at 8 PM.";
}

nextButton.addEventListener("click", showNextMeeting);

console.log("Welcome to " + clubName);


function sayHi() {
    console.log("Hi! Thanks for visiting " + clubName + "!")
}

sayHi()
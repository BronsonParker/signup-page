// Adding variables first
let clubName ="Game Club"
let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");
let themeButton = document.querySelector("#theme-btn");

// Dark Theme
function toggleTheme() {
  document.body.classList.toggle("dark");
}
themeButton.addEventListener("click", toggleTheme);

// Event listeners for button presses
function showNextMeeting() {
  nextMeeting.textContent = "Our next meeting is Friday, November 5th at 8 PM.";
}
nextButton.addEventListener("click", showNextMeeting);



// Calling features for Day 3 work
function sayHi() {
    console.log("Hi! Thanks for visiting " + clubName + "!");
}
console.log("Welcome to " + clubName);
sayHi()

timeLeft = localStorage.getItem("User's score");
userName = localStorage.getItem("User's Name");

var submitHS = document.querySelector("#submit");
var clearHS = document.querySelector("#clear");
var scoreList = document.querySelector(".scorelist");
var userName = document.querySelector("#name");

var scoreDisplay = document.createElement("p");

//Submitting Highscore
submitHS.addEventListener("click", function () {
  var userName = document.querySelector("#name").value;
  scoreDisplay.textContent = userName + ":" + " " + timeLeft + " " + "PTS";

  console.log(timeLeft);

  localStorage.setItem("User's Name", userName);
  console.log(localStorage);
  scoreList.appendChild(scoreDisplay);

});
//Clear Scores 
clearHS.addEventListener("click", function (event) {
  event.preventDefault();
  let clear = document.querySelector(".top-players");
  clear.textContent = "";
  localStorage.clear("User's Name", submitHS);
});
//Retrieves data from last input 
timeLeft = localStorage.getItem("User's score");
userName = localStorage.getItem("User's Name");

var savedScore = document.createElement("p");
savedScore.textContent = userName + ":" + " " + timeLeft + " " + "PTS";
scoreList.appendChild(savedScore);

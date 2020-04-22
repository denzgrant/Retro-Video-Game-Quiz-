userName = localStorage.getItem("User's Name");
timeLeft = localStorage.getItem("User's score");
console.log(typeof(timeLeft));

scoreList.appendChild(timeLeft);
console.log(userName)

var submitHS = document.querySelector("#submit");
var clearHS = document.querySelector("#clear");
var scoreList = document.querySelector(".scorelist");
var userName = document.querySelector("#name");

var scoreDisplay = document.createElement("p");

//Submitting Highscore
submitHS.addEventListener("click", function () {
  var userName = document.querySelector("#name").value;
  scoreDisplay.textContent = userName + ":" + " " + timeLeft + " " + "PTS";
  console.log(scoreList);
  if (timeLeft === null){{
    return;
  }}
  localStorage.setItem("User's Name", userName);
  scoreList.appendChild(scoreDisplay);
});

//Clear Scores 
clearHS.addEventListener("click", function (event) {
  event.preventDefault();
  let clear = document.querySelector(".top-players");
  scoreList.textContent = "";
  localStorage.clear("User's Name", submitHS);
});
//Retrieves data from last input 
userName = localStorage.getItem("User's Name");

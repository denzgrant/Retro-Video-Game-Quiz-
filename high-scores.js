
var submitHS = document.querySelector("#submit"); 
var clearHS = document.querySelector("#clear");
var scoreList = document.querySelector(".scorelist");
var userName = document.querySelector("#name");

submitHS.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event);
    var userName = document.querySelector("#name").value;
    localStorage.setItem("User's Name", submitHS);
    
    var scoreDisplay = document.createElement("p");
    scoreDisplay.textContent = userName;
    scoreList.appendChild(scoreDisplay);
    //score automatically should post and have user input name 
    //check storage for saved names 

    clearHS.addEventListener("click", function(event) {
        event.preventDefault();
        scoreDisplay.textContent = "";
        scoreList.appendChild(scoreDisplay);
      });
    
});

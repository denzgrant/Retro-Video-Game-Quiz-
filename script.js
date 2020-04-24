var startQuiz = document.querySelector(".startquiz");
var timer = document.getElementById("timer");
var displayQuiz = document.querySelector(".quiz");
var answerResult = document.querySelector(".result");

var timeLeft = 60;

//Statrting the quiz 
startQuiz.addEventListener("click", function () {
    displayQuiz.style.background = "#9bbc0f";
    displayQuiz.style.height = "400px";
    document.body.style.backgroundColor = "gray";
    // <div id="cross"></div>

    var removeJumbotron = document.querySelector(".jumbotron");
    removeJumbotron.parentNode.removeChild(removeJumbotron);
    startQuiz.parentNode.removeChild(startQuiz);

    // var timeInterval = setInterval(function () {
    //     timeLeft--;
    //     timer.textContent = "Timer: " + timeLeft;
    //     if (timeLeft === 0) {
    //         clearInterval(timeInterval);
    //         document.location.href = 'high-scores.html';
    //     }

    // }, 1000);

    quizQs(userQuestions[0], userQuestions[0].d)

});

//Storing Time/Score 
function storingScore() {
    localStorage.setItem("User's score", timeLeft)
}
//Adding time for correct Answers 
function updateTimer() {
    timeLeft += timeLeft + 10;
    timer.textContent = "Timer: " + timeLeft;
}
//Questions for user 
const userQuestions = [{
    question: "What was the first publicly released video game console ever made?",
    a: "Atari 2600",
    b: "Magnavox Odyssey",
    c: "Nintendo Entertainment System",
    d: "Atari Pong",
},
{
    question: "What does Sega stand for?",
    a: "Specialized Electronics and Graphic Arts",
    b: "Service Games",
    c: "Super Entertainment Gaming Action",
    d: "Special Entertainment Games Association",
},
{
    question: "What was one of the first game systems that actually enabled an internet connection?",
    a: "Sega Dreamcast",
    b: "Super Nintendo",
    c: "Sega Genesis",
    d: "Xbox",
},
{
    question: "Who is Mario's brother?",
    a: "Green Mario",
    b: "\"Gotta go fast\"",
    c: 'Goose from the video game titled "Untiled Goose Game"',
    d: "Luigi",
},
{
    question: "Who is the main protagonist in the The Legend of Zelda?",
    a: "Navi",
    b: "Zelda",
    c: "Aegon Targaryen",
    d: "Link",
}
];
//Question One
function quizQs(userQues, answer, ) {
    let ques = `<div class="quiz">
    <p>${userQues.question}</p>
    <button id="qzbutton1" class="qzbutton">
    ${userQues.a}</button>
    <button id="qzbutton2" class="qzbutton">
    ${userQues.b}</button>
    <button id="qzbutton3" class="qzbutton">
    ${userQues.c}</button>
    <button id="qzbutton4" class="qzbutton">
    ${userQues.d}</button></div>`
    console.log(answer);
    displayQuiz.innerHTML = ques;

    //use a function 
        let quesButton = document.querySelector('#qzbutton1');
        quesButton.addEventListener("click", function () {
            alert("Test");

        });

    
}


// quizButton1.addEventListener("click", function () {
//     var displayh1 = document.createElement("h1");
//     displayh1.textContent = "InCorrect";
//     answerResult.appendChild(displayh1);
//     displayh1.setAttribute("style", "marginLeft: 5000px;");
//     questionTwo();
// });
// quizButton2.addEventListener("click", function () {
//     var displayh1 = document.createElement("h1");
//     displayh1.textContent = "Incorrect";
//     answerResult.appendChild(displayh1);
//     questionTwo();
// });
// quizButton3.addEventListener("click", function () {
//     var displayh1 = document.createElement("h1");
//     displayh1.textContent = "Incorrect";
//     answerResult.appendChild(displayh1);
//     questionTwo();
// });
// quizButton4.addEventListener("click", function () {
//     var displayh1 = document.createElement("h1");
//     displayh1.textContent = "Correct!";
//     answerResult.appendChild(displayh1);
//     questionTwo();
//     updateTimer();

// });
//Question Two 
var quizButton5 = document.createElement('button');
var quizButton6 = document.createElement('button');
var quizButton7 = document.createElement('button');
var quizButton8 = document.createElement('button');

quizButton5.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton6.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton7.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton8.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");


function questionTwo() {
    // answerResult.removeChild(answerResult);

    var displayp = document.createElement("p");
    displayp = displayQuiz;
    displayQuiz.innerHTML = userQuestions[1].question

    quizButton5.innerHTML = userQuestions[1].a;
    displayQuiz.appendChild(quizButton5);

    quizButton6.innerHTML = userQuestions[1].b;
    displayQuiz.appendChild(quizButton6);

    quizButton7.innerHTML = userQuestions[1].c;
    displayQuiz.appendChild(quizButton7);

    quizButton8.innerHTML = userQuestions[1].d;
    displayQuiz.appendChild(quizButton8);

    quizButton5.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect";
        answerResult.appendChild(displayh1);
        questionThree();
    });
    quizButton6.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Correct";
        answerResult.appendChild(displayh1);
        questionThree();
        updateTimer();
    });
    quizButton7.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect";
        answerResult.appendChild(displayh1);
        questionThree();
    });
    quizButton8.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect";
        answerResult.appendChild(displayh1);
        questionThree();
        answerResult.remove(answerResult);

    });

}
//Question Three
var quizButton9 = document.createElement('button');
var quizButton10 = document.createElement('button');
var quizButton11 = document.createElement('button');
var quizButton12 = document.createElement('button');

quizButton9.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton10.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton11.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton12.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");


function questionThree() {
    var displayp = document.createElement("p");
    displayp = displayQuiz;
    displayQuiz.innerHTML = userQuestions[2].question

    quizButton9.innerHTML = userQuestions[2].a;
    displayQuiz.appendChild(quizButton9);

    quizButton10.innerHTML = userQuestions[2].b;
    displayQuiz.appendChild(quizButton10);

    quizButton11.innerHTML = userQuestions[2].c;
    displayQuiz.appendChild(quizButton11);

    quizButton12.innerHTML = userQuestions[2].d;
    displayQuiz.appendChild(quizButton12);

    quizButton9.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Correct";
        answerResult.appendChild(displayh1);
        questionFour();
        updateTimer();
    });
    quizButton10.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect";
        answerResult.appendChild(displayh1);
        questionFour();
    });
    quizButton11.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect";
        answerResult.appendChild(displayh1);
        questionFour();
    });
    quizButton12.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect";
        answerResult.appendChild(displayh1);
        questionFour();
    });
}

//Question Four
var quizButton13 = document.createElement('button');
var quizButton14 = document.createElement('button');
var quizButton15 = document.createElement('button');
var quizButton16 = document.createElement('button');

quizButton13.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton14.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton15.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton16.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");

function questionFour() {
    var displayp = document.createElement("p");
    displayp = displayQuiz;
    displayQuiz.innerHTML = userQuestions[3].question

    quizButton13.innerHTML = userQuestions[3].a;
    displayQuiz.appendChild(quizButton13);

    quizButton14.innerHTML = userQuestions[3].b;
    displayQuiz.appendChild(quizButton14);

    quizButton15.innerHTML = userQuestions[3].c;
    displayQuiz.appendChild(quizButton15);

    quizButton16.innerHTML = userQuestions[3].d;
    displayQuiz.appendChild(quizButton16);

    quizButton13.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect";
        answerResult.appendChild(displayh1);
        questionFive();
    });
    quizButton14.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect";
        answerResult.appendChild(displayh1);
        questionFive();
    });
    quizButton15.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect";
        answerResult.appendChild(displayh1);
        questionFive();
    });
    quizButton16.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Correct";
        answerResult.appendChild(displayh1);
        questionFive();
        updateTimer();
    });
}

//Question FIve
var quizButton17 = document.createElement('button');
var quizButton18 = document.createElement('button');
var quizButton19 = document.createElement('button');
var quizButton20 = document.createElement('button');

quizButton17.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton18.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton19.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton20.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");

function questionFive() {
    var displayp = document.createElement("p");
    displayp = displayQuiz;
    displayQuiz.innerHTML = userQuestions[4].question

    quizButton17.innerHTML = userQuestions[4].a;
    displayQuiz.appendChild(quizButton17);

    quizButton18.innerHTML = userQuestions[4].b;
    displayQuiz.appendChild(quizButton18);

    quizButton19.innerHTML = userQuestions[4].c;
    displayQuiz.appendChild(quizButton19);

    quizButton20.innerHTML = userQuestions[4].d;
    displayQuiz.appendChild(quizButton20);

    quizButton17.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect";
        answerResult.appendChild(displayh1);
        storingScore();
        document.location.href = 'high-scores.html';
    });
    quizButton18.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect";
        answerResult.appendChild(displayh1);
        storingScore();
        document.location.href = 'high-scores.html';
    });
    quizButton19.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect";
        answerResult.appendChild(displayh1);
        storingScore();
        document.location.href = 'high-scores.html';
    });
    quizButton20.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Correct";
        answerResult.appendChild(displayh1);
        updateTimer();
        storingScore();
        document.location.href = 'high-scores.html';

    });
}

//Grabing the DOM 
var startQuiz = document.querySelector(".startquiz");
var timer = document.getElementById("timer");
var displayQuiz = document.querySelector(".quiz");
var answerResult = document.querySelector(".result");


var quizButton1 = document.createElement('button');
var quizButton2 = document.createElement('button');
var quizButton3 = document.createElement('button');
var quizButton4 = document.createElement('button');


var quizButton5 = document.createElement('button');
var quizButton6 = document.createElement('button');
var quizButton7 = document.createElement('button');
var quizButton8 = document.createElement('button');
//Question 1
quizButton1.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton2.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton3.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton4.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// //Question 2
quizButton5.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton6.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton7.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
quizButton8.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// //Question 3
// quizButton3_1.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// quizButton3_2.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// quizButton3_3.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// quizButton3_4.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// //Question 4 
// quizButton4_1.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// quizButton4_2.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// quizButton4_3.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// quizButton4_4.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// //Question 5
// quizButton5_1.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// quizButton5_2.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// quizButton5_3.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");
// quizButton5_4.setAttribute("style", "color:white; background: #8B008B; padding: 5px; margin: 15px; display: grid;");

(function quizBackground () {
    displayQuiz.style.background = "#9bbc0f";
    displayQuiz.style.height = "300px";
    document.body.style.backgroundColor = "gray";
});

var timeLeft = 3;
//Event listener to begin the quiz
startQuiz.addEventListener("click", function () {
    displayQuiz.style.background = "#9bbc0f";
    displayQuiz.style.height = "300px";
    document.body.style.backgroundColor = "gray";

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
    questionOne();
});

//Questions for user 
const userQuestions = [{
    question: "What was the first publicly released video game console ever made?",
    a: "Atari 2600",
    b: "Magnavox Odyssey",
    c: "Nintendo Entertainment System",
    d: "Atari Pong",
    correctAnswer: "d"
},
{
    question: "What does Sega stand for?",
    a: "Specialized Electronics and Graphic Arts",
    b: "Service Games",
    c: "Super Entertainment Gaming Action",
    d: "Special Entertainment Games Association",
    correctAnswer: "b"

},
{
    question: "What was one of the first game systems that actually enabled an internet connection?",
    a: "Sega Dreamcast",
    b: "Super Nintendo",
    c: "Sega Genesis",
    d: "Xbox",
    correctAnswer: "a"
},
{
    question: "Who is Mario's brother?",
    a: "Green Mario",
    b: "Gotta go fast",
    c: 'Goose from the video game titled "Untiled Goose Game"',
    d: "Luigi",
    correctAnswer: "d"
},
{
    question: "Who is the main protagonist in the The Legend of Zelda?",
    a: "Navi",
    b: "Zelda",
    c: "Aegon Targaryen",
    d: "Link",
    correctAnswer: "d"
}
];
function questionOne() {
    var displayp = document.createElement("p");
    displayp = displayQuiz;
    displayQuiz.innerHTML = userQuestions[0].question 

    quizButton1.innerHTML = userQuestions[0].a;
    displayQuiz.appendChild(quizButton1);

    quizButton2.innerHTML = userQuestions[0].b;
    displayQuiz.appendChild(quizButton2);

    quizButton3.innerHTML = userQuestions[0].c;
    displayQuiz.appendChild(quizButton3);

    quizButton4.innerHTML = userQuestions[0].d;
    displayQuiz.appendChild(quizButton4);

    quizButton1.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "InCorrect"; 
        answerResult.appendChild(displayh1);
        displayh1.setAttribute("style", "marginLeft: 5000px;");
        questionTwo(); 
    });
    quizButton2.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Incorrect"; 
        answerResult.appendChild(displayh1);
        questionTwo(); 
    });
    quizButton3.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Nope, Sorry"; 
        answerResult.appendChild(displayh1);
        questionTwo(); 
    });
    quizButton4.addEventListener("click", function () {
        var displayh1 = document.createElement("h1");
        displayh1.textContent = "Correct!"; 
        answerResult.appendChild(displayh1);
        questionTwo(); 
    //    (function subtractTime() {
    //     timeLeft += timeLeft + 10; 
    //    }); 
    });
    // answerResult.removeChild(answerResult);
}
 


//Question Two 
function questionTwo() {
    // answerResult.removeChild(answerResult);

    var displayp = document.createElement("p");
    displayp = displayQuiz;
    displayQuiz.innerHTML = userQuestions[1].question 

    quizButton1.innerHTML = userQuestions[1].a;
    displayQuiz.appendChild(quizButton1);

    quizButton2.innerHTML = userQuestions[1].b;
    displayQuiz.appendChild(quizButton2);

    quizButton3.innerHTML = userQuestions[1].c;
    displayQuiz.appendChild(quizButton3);

    quizButton4.innerHTML = userQuestions[1].d;
    displayQuiz.appendChild(quizButton4);
    
}
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
//    (function subtractTime() {
//     timeLeft += timeLeft + 1; 
   
//    }); 
});
answerResult.removeChild(answerResult);
//Question Three 

function questionThree() {
    // answerResult.removeChild(answerResult);

    var displayp = document.createElement("p");
    displayp = displayQuiz;
    displayQuiz.innerHTML = userQuestions[2].question 

    quizButton1.innerHTML = userQuestions[2].a;
    displayQuiz.appendChild(quizButton1);

    quizButton2.innerHTML = userQuestions[2].b;
    displayQuiz.appendChild(quizButton2);

    quizButton3.innerHTML = userQuestions[2].c;
    displayQuiz.appendChild(quizButton3);

    quizButton4.innerHTML = userQuestions[2].d;
    displayQuiz.appendChild(quizButton4);
    
}
quizButton9.addEventListener("click", function () {
    var displayh1 = document.createElement("h1");
    displayh1.textContent = "Incorrect"; 
    answerResult.appendChild(displayh1);
});
quizButton10.addEventListener("click", function () {
    var displayh1 = document.createElement("h1");
    displayh1.textContent = "Correct"; 
    answerResult.appendChild(displayh1);
});
quizButton11.addEventListener("click", function () {
    var displayh1 = document.createElement("h1");
    displayh1.textContent = "Incorrect"; 
    answerResult.appendChild(displayh1);
});
quizButton12.addEventListener("click", function () {
    var displayh1 = document.createElement("h1");
    displayh1.textContent = "Incorrect"; 
    answerResult.appendChild(displayh1);
//    (function subtractTime() {
//     timeLeft += timeLeft + 1; 
   
//    }); 
});

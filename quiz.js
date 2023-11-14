var timer = 30
var questionindex = 0
var elpsed;

const questions = [
    {
        questions: "Commonly used data types DO NOT include ",
        answers: [
            { Text: "Strings", isCorrect: false },
            { Text: "Booleans", isCorrect: true },
            { Text: "alerts", isCorrect: false },
            { Text: "numbers", isCorrect: false },
        ]
    },
    {
        questions: "The condition of an if/else statement is enclosed within ______.",
        answers: [
            { Text: "quotes", isCorrect: false },
            { Text: "curly brackets", isCorrect: true },
            { Text: "parenthasis", isCorrect: false },
            { Text: "square brackets", isCorrect: false },
        ]
    },
    {
        questions: "Arrays in Javascript can be used to store ______.",
        answers: [
            { Text: "number & strings", isCorrect: false },
            { Text: "other arrays", isCorrect: false },
            { Text: "booleans", isCorrect: false },
            { Text: "all of the above", isCorrect: true },
        ]
    },
    {
        questions: "String values must be enclosed within ______ when being assigned to variables.",
        answers: [
            { Text: "quotes", isCorrect: true },
            { Text: "curly brackets", isCorrect: false },
            { Text: "commas", isCorrect: false },
            { Text: "parentheses", isCorrect: false },
        ]
    }
]
const start = document.querySelector("#start")
const quiz = document.querySelector("#quizcontent")
const question = document.querySelector("#question")
const selection = document.querySelector("#selection")
const timerdiv = document.querySelector("#timer")
const right= document.querySelector("#correct")

start.addEventListener("click", function () {
    displayquestion()
    clock ()
})

function displayquestion() {
    var currentquestion = questions[questionindex];
    question.textContent = currentquestion.questions
    selection.innerHTML = "";
    for (i = 0; i < 4; i++) {
        var btn = document.createElement("button")
        btn.textContent = currentquestion.answers[i].Text
        btn.value = currentquestion.answers[i].isCorrect
        btn.onclick = checkans
        selection.append(btn)
    }
}

function checkans() {
    console.log(this)
    if (this.value === "true") {
        console.log("true")
        right.innerHTML = '<p style="Font-size:50px;">Correct! </p>'
    } else {
        console.log("false");
        right.innerHTML = '<p style="Font-size:50px;">WRONG! </p>'
        timer -= 2
    }
    questionindex++
    if (questionindex >= questions.length) {
        console.log("Game Over");
        alert("Game Over!");
    } else {
        displayquestion();
    }
}
function clock() {
    elpsed = setInterval(function () {
        timer--                             // subtracts 1 from timer
        timerdiv.textContent = timer
        if (timer === 0) {
            clearInterval(elpsed);
        } else if (timer < 0) {
            timer = 0
            clearInterval(elpsed)
        }
    }, 1000)
}
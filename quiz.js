var timer = 20
const questions = [
    {
        questions: "Commonly used data types DO NOT include ",
        [
            { Text: "Strings", isCorrect: false },
            { Text: "Booleans", isCorrect: true },
            { Text: "alerts", isCorrect: false },
            { Text: "numbers", isCorrect: false },
    ]
    },
    {
        questions: "The condition of an if/else statement is enclosed within ______.",
        [
            { Text: "quotes", isCorrect: false },
            { Text: "curly brackets", isCorrect: true },
            { Text: "parenthasis", isCorrect: false },
            { Text: "square brackets", isCorrect: false },
        ]
    },
    {
        questions: "Arrays in Javascript can be used to store ______.",
        [
            { Text: "number & strings", isCorrect: false },
            { Text: "other arrays", isCorrect: false },
            { Text: "booleans", isCorrect: false },
            { Text: "all of the above", isCorrect: true },
]
    },
    {
        questions: "String values must be enclosed within ______ when being assigned to variables.",
        [
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

function displayquestion() {
    var currentquestion = questions[questionindex];
    var questions = questionindex
}
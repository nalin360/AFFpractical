// playsection
// playbtn
// gamesection
// import data from '../data.json'

const data = require('../data.json');

// console.log(data);
function playButton() {
    // const playbtn  = document.getElementById("playbtn");
    const playsection = document.getElementById("playsection");
    const gamesection = document.getElementById("gamesection");

    playsection.style.display ="none"
    gamesection.style.display = "flex"

    showQuiz();
    
}

function showQuiz() {

}

const quizData = {
    "questions": [
        {
            "question": "What is the correct way to declare a variable in JavaScript?",
            "options": ["var myVar;", "myVar;", "variable myVar;", "let myVar;"],
            "answer": "let myVar;"
        },
        // Add more questions here...
    ]
};

const quizForm = document.getElementById('quiz-form');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h3>${currentQuestion.question}</h3>
        <ul>
            ${currentQuestion.options.map((option, index) => `
                <li>
                    <input type="radio" id="option-${index}" name="options" value="${option}">
                    <label for="option-${index}">${option}</label>
                </li>
            `).join('')}
        </ul>
    `;
}

function displayResult() {
    resultContainer.innerHTML = <p>Your score: ${score}/${quizData.questions.length}</p>;
    resultContainer.style.display = 'block';
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption) {
        if (selectedOption.value === quizData.questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.questions.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
}

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    checkAnswer();
});

displayQuestion();
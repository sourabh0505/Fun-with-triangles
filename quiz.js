const submitButton = document.querySelectorAll("#submit-btn");
const formQuiz = document.querySelector("#form-quiz");
const outputRslt = document.querySelector("#output");

const correctAnswers = ["90 degree", "Right angled", "12,16,20", "Equilateral triangle", "100 degree", "30 degree", "a + b + c", "45 degree"];

function calculateScore() {
    let score = 0;
    let index = 0;
    console.log(index[0]);
    const formResults = new FormData(formQuiz);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score++;
        }
        index++;
    }
    outputRslt.innerText = "Yay! Your score is: " + score;
}

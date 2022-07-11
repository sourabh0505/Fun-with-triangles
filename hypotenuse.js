const submitButton = document.querySelector("#submit-btn");
const inputField = document.querySelectorAll(".input");
const outputRslt = document.querySelector("#output");

function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(inputField[0].value), Number(inputField[1].value));
    const squareRoot = Math.sqrt(sumOfSquares);
    
    outputRslt.innerText = "The length of the Hypotenuse is: " + squareRoot;
    // console.log(squareRoot);

}

submitButton.addEventListener("click", calculateHypotenuse);
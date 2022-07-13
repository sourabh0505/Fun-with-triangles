const submitButton = document.querySelector("#submit-btn");
const inputValues = document.querySelectorAll(".input");
const outputRslt = document.querySelector("#output");

function calculateTheFormula(base, height){
    const areaFormula = (base*height)/2;
    return areaFormula;
}

function calculateAreaOfTriangle(){
    const areaFormula = calculateTheFormula(Number(inputValues[0].value), Number(inputValues[1].value));
    outputRslt.innerText = "The area of the triangle is: " + areaFormula;
}

submitButton.addEventListener("click", calculateAreaOfTriangle);
const inputs = document.querySelectorAll(".input-angles");
const isTriangleBtn = document.querySelector("#Is-triangle-btn");
const outputRslt = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;
}

function IsTriangle (){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputRslt.innerText = "Yay!! It is a triangle."
    }
    else{
        outputRslt.innerText = "It is not a triangle!";
    }
}

isTriangleBtn.addEventListener("click", IsTriangle);
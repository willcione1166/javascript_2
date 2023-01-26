window.onload = function() {
const ranNum = Math.floor(Math.random() * 10) + 1;
const randomNum =Math.ceil(Math.random() * 10) + 1;
 
const questionElement = document.getElementById("question");
const inputElement = document.getElementById("input");
const formElement = document.querySelector("form");
questionElement.innerText = `What is ${ranNum} multiplied by ${randomNum}?`;

const correctAnswer = ranNum * randomNum;

const submitBtn = document.getElementById("submit");

submitBtn.onclick = () => {

    const userInput = +inputElement.value;
    console.log("Correct!");
};
const score = document.getElementById("score");



};
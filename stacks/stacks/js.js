const questiontext = document.getElementById("question-text");
const answers = document.getElementById('answers');                                  
const nextbutton = document.getElementById("next");
const resultcontainer = document.getElementById("results");
const quizcontainer = document.getElementById("quizcontainer");
const submitbutton = document.getElementById("submit");
const counter = document.getElementById("counter");
const start = document.getElementById("buildquiz");
const startpage = document.getElementById("index");
const questions = [
  {
    question: "Which product is the most popular on the mcdonalds lunch menu?",
    A: "Big Mac",
    B: "Mcnuggets",
    C: "Fries",
    D: "Double cheeseburger",
    correctanswer: "Fries",
    itemSelected: `${0}`
  },
  {
    question: "Which fast food business is most well know for their burgers?",
    A: "Burger King",
    B: "Mcdonalds",
    C: "KFC",
    D: "Wendys",
    correctanswer: "Burger King",
    itemSelected: `${0}`
  },
  {
    question: "Which fast food restaurant has the most locations in the USA?",
    A: "Mcdonalds",
    B: "KFC",
    C: "Wendys",
    D: "Subway",
    correctanswer: "Subway",
    itemSelected: `${0}`
  },
  {
    question: "Which fast food company has the popular ice cream?",
    A: "Mcdonalds",
    B: "Burger King",
    C: "Dairy Queen",
    D: "Wendys",
    correctanswer: "Dairy Queen",
    itemSelected: `${0}`
  }, 
  {
    question: "Which restaurant sells the most popular milkshakes?",
    A: "Mcdonalds",
    B: "Wendys",
    C: "Dairy Queen",
    D: "Burger King",
    correctanswer: "Dairy Queen",
    itemSelected: `${0}`
  },
  {
    question: "Which fast food restaurant has the most popular chicken?",
    A: "KFC",
    B: "Wendys",
    C: "Taco Bell",
    D: "Mcdonalds",
    correctanswer: "KFC",
    itemSelected: `${0}`
  },
  {
    question: "Which popular fast food restaurant is known for being affordable?",
    A: "Taco Bell",
    B: "Chipotle",
    C: "Mcdonalds",
    D: "Subway",
    correctanswer: "Mcdonalds",
    itemSelected: `${0}`
  }, 
  {
    question: "Which fast food restaurant is considered the healthiest?",
    A: "Subway",
    B: "Taco Bell",
    C: "Chipotle",
    D: "Wendys",
    correctanswer: "Taco Bell",
    itemSelected: `${0}`
  },
  {
    question: "How many dips can you get with 20 Mcnuggets from Mcdonalds?",
    A: "2",
    B: "6",
    C: "4",
    D: "3",
    correctanswer: "4",
    itemSelected: `${0}`
  }
];
//Question index at start
let chosenItemsArray = [];
chosenItemsArray.push(questions[0].itemSelected);

let questionindex = 0;
let numcorrect=0;
const buildquiz = (e) => {
  startpage.classList.add("hidden");
  quizcontainer.classList.remove("hidden");
  nextbutton.classList.remove("hidden");
  questiontext.innerHTML = questions[questionindex].question;
  console.log(e.target.value);
  console.log(e.target);
  console.log(e);
  console.log(questionindex+1)
  const answerList = `
  <ul>
    <li>   
      <input type="radio" name="option${questions[questionindex].A}" class="options">
      <label for="${questions[questionindex].A}" class="labels">${questions[questionindex].A}</label>
    </li>
    <li>
       <input type="radio" name="option${questions[questionindex].B}" class="options">
       <label for="${questions[questionindex].B}" class="labels">${questions[questionindex].B}</label>
    </li>
    <li>
      <input type="radio" name="option${questions[questionindex].C}"  class="options">
      <label for="${questions[questionindex].C}" class="labels">${questions[questionindex].C}</label>
    </li>
    <li>
      <input type="radio" name="option${questions[questionindex].D}" class="options">
      <label for="${questions[questionindex].D}" class="labels">${questions[questionindex].D}</label>
    </li>

  </ul>
  <div id="counter"> ${questionindex+1} of ${questions.length}</div>
  `
  answers.innerHTML= answerList;
  console.log(answers);
};

  nextbutton.classList.add("hidden");




const nextquestion = (e) => {
  questionindex++;
  buildquiz(e);
console.log(e.target)
  if(questionindex+1===questions.length) {
    submitbutton.classList.remove("hidden");
    nextbutton.classList.add("hidden");
    console.log(e.target.value);
    console.log(questionindex+1)
}
};
const showresults = (e) => {
  console.log(e);
  console.log(e.target)
  questions[questionindex].itemSelected = questions[questionindex]+1;
  questions[questionindex].correctanswer = chosenItemsArray[questionindex];
  resultcontainer.innerHTML = `You got ${numcorrect} out of ${questions.length}`;
  console.log(e.target.value);
  console.log(questionindex+1)
};
//Load first question and answers
start.addEventListener("click", buildquiz);
//Button to display next question
nextbutton.addEventListener("click", nextquestion);
submitbutton.addEventListener("click", showresults);





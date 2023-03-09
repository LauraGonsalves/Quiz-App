
let quizes = [
  {
    question: "What is the full form of HTML?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hypertext Mark Language",
    d: "Hypertext Machine Language",
    correct: "a"
  },
  {
    question: "What is CSS used for?",
    a: "To create dynamic web pages",
    b: "To define the structure of a web page",
    c: "To add interactivity to a web page",
    d: "To style the visual presentation of a web page",
    correct: "d"
  },
  {
    question: "What does the 'JS' in JavaScript stand for?",
    a: "Java Source",
    b: "Java Syntax",
    c: "JavaScript",
    d: "JavaScripting",
    correct: "c"
  },
  {
    question: "Which HTML tag is used to link an external JavaScript file?",
    a: "<script>",
    b: "<link>",
    c: "<style>",
    d: "<meta>",
    correct: "a"
  }, {
    question: "Which of the following is NOT a JavaScript data type?",
    a: "number",
    b: "boolean",
    c: "string",
    d: "class",
    correct: "d"
  },
  {
    question: "What is the output of the following code: console.log(typeof null);",
    a: "undefined",
    b: "null",
    c: "object",
    d: "string",
    correct: "c"
  },
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Creative Style Sheets",
    c: "Computer Style Sheets",
    d: "Colorful Style Sheets",
    correct: "a"
  },
  {
    question: "What is the capital of Australia?",
    a: "Melbourne",
    b: "Sydney",
    c: "Canberra",
    d: "Brisbane",
    correct: "c"
  }
];
let scn = document.querySelector(".scn");
let startBtn = document.querySelector(".start");
let submit = document.querySelector(".submit");
let start = document.querySelector(".frst");
let ques = document.querySelector("#question");
let answers = document.querySelectorAll(".answer");
let a_text = document.querySelector("#a_text");
let b_text = document.querySelector("#b_text");
let c_text = document.querySelector("#c_text");
let d_text = document.querySelector("#d_text");
let point = document.querySelector(".point");
let s = document.querySelector("#score");

let current = 0;
let score = 0;

startBtn.addEventListener("click", function () {
  start.classList.add("notactv");
  scn.classList.remove("notactv");



});


loadquiz();
select();

function loadquiz() {
  deselect()
  let currentquiz = quizes[current];
  ques.innerText = currentquiz.question;
  a_text.innerText = currentquiz.a;
  b_text.innerText = currentquiz.b;
  c_text.innerText = currentquiz.c;
  d_text.innerText = currentquiz.d;



};

function deselect() {
  answers.forEach(e => e.checked = false)
};


function select() {
  let result;
  answers.forEach(e => {
    if (e.checked) {
      result = e.id;
    }
  })
  return result;

};
submit.addEventListener("click", function () {
  let result = select();
  if (result) {
    if (result === quizes[current].correct) {
      score++

    }
    current++
    scores();
    loadquiz();
  }




});

function scores() {
  if (current > quizes.length - 1) {
    s.innerText = score;
    scn.classList.remove("actv");
    scn.classList.add("notactv");
    point.classList.remove("notactv");
    point.classList.add("actv");
  }

};
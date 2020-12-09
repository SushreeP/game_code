/***** Game operations ********/
let operations = [
  "+2",
  "+3",
  "+4",
  "+5",
  "+6",
  "+7",
  "+8",
  "+9",
  "-2",
  "-3",
  "-4",
  "-5",
  "-6",
  "-7",
  "-8",
  "-9",
  "x2",
  "x3",
  "x4",
  "x5",
  "x6",
  "x7",
  "x8",
  "x9",
  "/2",
  "^2",
];

/****** DOM Elements *******/

let displayOperation = operations[Math.floor(Math.random() * 25)];
let operationH1 = document.createElement("h1");
operationH1.textContent = displayOperation;

let gameDiv = document.getElementById("game");
let operationDiv = document.getElementById("operation");

let startbtn = document.getElementById("start");

let nextbtn = document.createElement("button");
nextbtn.setAttribute("id", "next");
nextbtn.innerText = "Next";

let stopbtn = document.createElement("button");
stopbtn.setAttribute("id", "stop");
stopbtn.innerText = "Stop";

let playAgain = document.createElement("button");
playAgain.setAttribute("id", "playAgain");
playAgain.innerText = "Play Again?";

let buttonsDiv = document.createElement("div");
buttonsDiv.setAttribute("id", "buttons");
buttonsDiv.appendChild(nextbtn);
buttonsDiv.appendChild(stopbtn);

let scoreh1 = document.createElement("h1");
scoreh1.setAttribute("id", "scoreh1");
scoreh1.innerHTML = "Your Score";

let beaten = document.createElement("h4");
beaten.style.color = "green";
beaten.style.textAlign = "center";
beaten.style.marginBottom = "3%";
beaten.style.marginTop = "5%";
beaten.style.fontSize = "2em";
beaten.innerHTML = "";
beaten.style.display = "none";

let br = document.createElement("br");

let scoreh3 = document.createElement("h3");
scoreh3.setAttribute("id", "scoreh3");

let useranswer = document.userinput.useranswer;
let formcontainer = document.getElementById("formcontainer");
let timerSpan = document.getElementById("timer");

/****** Variables *******/
var timer;
var sec = 0;

var startingNumber = 0;
var userAnswers = [];
var score = 0;

const currentUser = localStorage.getItem("currentUser");
var users = JSON.parse(localStorage.getItem("users"));
var playAgainst = localStorage.getItem("playingAgainst");
var targetScore = parseInt(localStorage.getItem("targetScore"));

/****** checkForProceeding *******/
var checkForProceeding = (num, operation) => {
  var answer = parseInt(userAnswers[userAnswers.length - 1]);
  if (answer % 2 != 0 && operation == "/2") {
    operations = Math.floor(Math.random() * 25);
    operationDiv.innerHTML = operations;
  }
  var operator = operation[0];
  var operand = parseInt(operation[1]);
  switch (operator) {
    case "+":
      answer += operand;
      break;
    case "-":
      answer -= operand;
      break;
    case "x":
      answer *= operand;
      break;
    case "/":
      answer /= operand;
      break;
    case "^":
    default:
      answer *= answer;
      break;
  }
  if (num == answer) {
    return true;
  } else {
    return false;
  }
};

/****** start *******/
var start = (e) => {
  e.preventDefault();

  startingNumber = useranswer.value;
  userAnswers.push(startingNumber);
  useranswer.value = "";

  operationDiv.style.display = "block";
  operationDiv.appendChild(operationH1);

  startbtn.style.display = "none";
  formcontainer.style.marginTop = "1%";

  nextbtn.style.display = "inline-block";
  stopbtn.style.display = "inline-block";
  buttonsDiv.style.display = "block";
  gameDiv.appendChild(buttonsDiv);

  timerSpan.innerHTML = "0s";
  timer = setInterval(function () {
    timerSpan.innerHTML = ++sec + "s";
  }, 1000);
  timerSpan.style.display = "block";
};

startbtn.addEventListener("click", start);

/****** next *******/
var next = (e) => {
  e.preventDefault();

  if (!checkForProceeding(parseInt(useranswer.value), displayOperation)) {
    stop(e);
  }

  userAnswers.push(useranswer.value);
  useranswer.value = "";
  displayOperation = operations[Math.floor(Math.random() * 25)];
  operationH1.textContent = displayOperation;
  score++;

  sec = 0;
};
nextbtn.addEventListener("click", next);

/****** stop *******/
var stop = (e) => {
  e.preventDefault();

  operationDiv.style.display = "none";
  useranswer.style.display = "none";
  nextbtn.style.display = "none";
  stopbtn.style.display = "none";
  timerSpan.style.display = "none";

  clearInterval(timer);
  sec = 0;

  scoreh1.style.display = "inline-block";
  gameDiv.appendChild(scoreh1);

  br.style.display = "inline-block";
  gameDiv.appendChild(br);

  scoreh3.innerHTML = "" + score;
  scoreh3.style.display = "inline-block";
  gameDiv.appendChild(scoreh3);

  if (playAgainst != "") {
    if (score > targetScore) {
      beaten.style.color = "green";
      beaten.innerHTML = "You have beaten " + playAgainst + "!!";
    } else if (score < targetScore) {
      beaten.style.color = "red";
      beaten.innerHTML =
        "Unlucky, you haven't beaten " +
        playAgainst +
        "'s highscore, " +
        targetScore;
    } else {
      beaten.style.color = "orange";
      beaten.innerHTML = "It's a draw between you and " + playAgainst + "!!";
    }
    beaten.style.display = "inline-block";
    gameDiv.appendChild(beaten);
  }

  playAgain.style.display = "block";
  gameDiv.appendChild(playAgain);

  for (let i = 0; i < users.length; i++) {
    if (
      JSON.stringify(users[i].name) == currentUser &&
      parseInt(users[i].maxscore) < score
    ) {
      users[i].maxscore = score;
      let d = new Date();
      users[i].date =
        d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
      localStorage.setItem("users", JSON.stringify(users));
      break;
    }
  }
};

stopbtn.addEventListener("click", stop);

/****** restart *******/
var restart = (e) => {
  e.preventDefault();

  scoreh1.style.display = "none";
  scoreh3.style.display = "none";
  beaten.style.display = "none";
  playAgain.style.display = "none";
  br.style.display = "none";

  score = 0;
  userAnswers = [];

  formcontainer.style.marginTop = "30%";
  useranswer.value = "";
  useranswer.style.display = "block";
  startbtn.style.display = "block";

  gameDiv.appendChild(formcontainer);
};
playAgain.addEventListener("click", restart);

// declaring all the variables used
const submitForm = document.querySelector(".name");
const btnScore = document.getElementById("btnsend");
const userName = document.getElementById("userName");
const displayuserName = document.querySelector(".displayName");
const btnSubmit = document.getElementById("btnSubmit");
const score = document.querySelector(".score");
const regex = /^[a-zA-Z]{6,20}$/;

const validAnswers = ["B", "B", "B", "B"];
var checker = false;

// first function to check if the first form is valid
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkName(userName.value);
});

function checkName(name) {
  if (name === "" || name == null) {
    const errorMessage = document.createElement('h3');
    errorMessage.innerText = "You must give a name";
    userName.appendChild(errorMessage);
  } else {
  }

  if (regex.test(name)) {
    let inputsiplay = document.createElement("input");
    inputsiplay.setAttribute("type", "text");
    inputsiplay.setAttribute("value", name);
    inputsiplay.style.height = "55px";
    inputsiplay.style.marginTop = "34px";
    inputsiplay.style.width = "377px";
    displayuserName.appendChild(inputsiplay);
    userName.value = "";
    btnSubmit.setAttribute("disabled", "true");
    checker = true;
  } else {

    const errorNameLength = document.createElement('h5');
    errorNameLength.innerText = "the name must have min 6 characters and max:20 characters";
    errorNameLength.style.backgroundColor = "white";
    errorNameLength.style.color = "red";
    userName.previousElementSibling.appendChild(errorNameLength);
    setTimeout(function () {
      errorNameLength.innerText = "";
      errorNameLength.style.display = "none";
    }, 2000);
  }
}

// function to check the validty of the second form
score.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checker) {
    checkUserAnswers();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    alert("you must provide a name first");
  }
});

function checkUserAnswers() {
  const answers = document.querySelectorAll('[type="radio"]:checked');
  let finalScore = 0;
  answers.forEach((element, index) => {

    if (validAnswers[index] === element.value) {
      finalScore += 25;
    }
  })
  displayingScore(finalScore);
  btnScore.setAttribute("disabled", "true");
}

function displayingScore(finalScore){
  const displayScore = document.querySelector(".displayScore");
  let newElement = document.createElement("h2");
  newElement.innerHTML = `Your score is ${finalScore} %`;
  displayScore.append(newElement);
  const btnStartOver = document.createElement("div");
  btnStartOver.innerHTML = `<input type="button" id="newTest" class="btn test" value="start a new test" />`
  displayScore.append(btnStartOver);
  console.log(btnStartOver);
  const startOver = document.getElementById('newTest');
  console.log(startOver);
  startOver.addEventListener("click", () => {
    location.reload();
    console.log("hello");
  });
}

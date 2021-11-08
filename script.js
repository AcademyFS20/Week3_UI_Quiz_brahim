// declaring all the variables used
const submitForm = document.querySelector(".name");
const btnScore = document.getElementById("btnsend");
const userName = document.getElementById("userName");
const displayuserName = document.querySelector(".displayName");
const btnSubmit = document.getElementById("btnSubmit");
const score = document.querySelector(".score");
const regex = /^[a-zA-Z]{6,20}$/;

const validAnswers = ["B", "B", "B", "B"];


// first function to check if the first form is valid
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkName(userName.value);
  userName.value = "";
  btnSubmit.setAttribute("disabled", "true");
});

function checkName(name) {
  if (name === "" || name == null) {
    alert("must give a name");
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
  } else {
    alert("the name must have min 6 characters and max:20 characters");
  }
}

// function to check the validty of the second form
score.addEventListener("submit", (e) => {
  e.preventDefault();
  checkUserAnswers();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function checkUserAnswers() {
  const answers = document.querySelectorAll('[type="radio"]:checked');
  let finalScore=0;
  answers.forEach((element,index) => {
// console.log(index);
    if(validAnswers[index] === element.value)
    {
      finalScore+=25;
      console.log('yes');
      console.log(finalScore);
    }
  })
  
  // for (i = 0; i < validAnswers.length; i++) {
  //   if (validAnswers[i] == answers[i].attributes.value) {
  //     finalScore = finalScore +25;
  //   }
    const displayScore = document.querySelector(".displayScore");
    let newElement = document.createElement("h2");
    newElement.innerHTML = `Your score is ${finalScore} %`;
    displayScore.append(newElement);
  
}

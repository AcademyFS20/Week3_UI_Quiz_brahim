const submitForm = document.querySelector(".name");
const btnScore = document.getElementById("btnsend");
const userName = document.getElementById("userName");
const displayuserName = document.querySelector(".displayName")
const btnSubmit = document.getElementById('btnSubmit');
const regex = /^[a-zA-Z]{6,20}$/


console.log(submitForm);
console.log(btnScore);
console.log(userName);

submitForm.addEventListener('submit', e => {
    e.preventDefault();
    checkName(userName.value)
    userName.value = "";
    btnSubmit.setAttribute("disabled", "true");
  
});

function checkName(name){
if (name === '' || name == null){
alert("must give a name")
}
else{
  }

if (regex.test(name)){
    let inputsiplay = document.createElement("input");
    inputsiplay.setAttribute('type', 'text');
    inputsiplay.setAttribute('value', name);
    inputsiplay.style.height ='55px';
    inputsiplay.style.marginTop ='34px';
    displayuserName.appendChild(inputsiplay);
}
else{
    alert("the name must have min 6 characters and max:20 characters")
}

// if ((name.length < 3 ) || (name.length > 20)){
//     alert("the name must have min 6 characters and max:20 characters")
// }
// else{

// }

}

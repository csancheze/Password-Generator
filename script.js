// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphaArray = "";
var mayus = "QWERTYUIOPASDFGHJKLZXCVBNM";
var minus = "mnbvcxzlkjhgfdsapoiuytrewq";
var nums = "1234567890";
var syms = "!\"#$%\&\'()*+,-./:;<=>?@[\\]^_`{|}~";

//Getting form
const passLength = document.getElementById("many")
console.log(many.value);

const upperCase = document.getElementById("uppercase");
console.log(upperCase.checked);

const lowerCase = document.getElementById("lowercase");
console.log(lowerCase.checked);

const numBers = document.getElementById("numbers");
console.log(numBers.checked);

const symBols = document.getElementById("symbols");
console.log(symBols.checked);

//Choosing characters
if (upperCase.checked) {
  alphaArray = alphaArray + mayus;
} if (lowerCase.checked) {
  alphaArray = alphaArray + minus;
} if (numBers.checked) {
  alphaArray = alphaArray + nums;
} if (symBols.checked) {
  alphaArray = alphaArray + syms;
}
console.log(alphaArray)











// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//functions for criteria
function atLeastOne() {
  var checkBoxes = document.getElementsByClassName("criteria");
  var isChecked = false;
      for (var i = 0; i < checkBoxes.length; i++) {
          if ( checkBoxes[i].checked ) {
              isChecked = true;
          };
      };
      if (isChecked) {
          chooseArray();
          } else {
              alert("Please, choose at least one character type");
          }   
  }

  //function for choosing correct array

 //function for showing the form
 function showForm() {
  var x = document.getElementById("myForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function hideForm() {
  var x = document.getElementById("myForm");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
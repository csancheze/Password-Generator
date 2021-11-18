// Assignment Code
var alphaArray = "";
var betaArray = "";
var mayus = "QWERTYUIOPASDFGHJKLZXCVBNM";
var minus = "mnbvcxzlkjhgfdsapoiuytrewq";
var nums = "1234567890";
var syms = "!\"#$%\&\'()*+,-./:;<=>?@[\\]^_`{|}~";
var password = "";


// Write password to the #password input
function writePassword() {
  var sure = confirm("Are you sure?");
  if (sure === false) {
    
  } else {
  atLeastOne();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  showForm();
}}

//functions for criteria
function atLeastOne() {
  var checkBoxes = document.getElementsByClassName("criteria");
  var isChecked = false;
      for (var i = 0; i < checkBoxes.length; i++) {
          if ( checkBoxes[i].checked ) {
              isChecked = true;
          };
      };
      if (isChecked === false) {
        alert("Please, choose at least one character type");
          } else {      
          }   
  }

//function for choosing correct array

function chooseArray() {
  var upperCase = document.getElementById("uppercase");
  var lowerCase = document.getElementById("lowercase");
  var numBers = document.getElementById("numbers");
  var symBols = document.getElementById("symbols");
      if (upperCase.checked) {
        alphaArray = alphaArray + mayus;
      } if (lowerCase.checked) {
        alphaArray = alphaArray + minus;
      } if (numBers.checked) {
        alphaArray = alphaArray + nums;
      } if (symBols.checked) {
        alphaArray = alphaArray + syms;
      }
    return alphaArray;
    }



 //function for showing the form
 function showForm() {
  var x = document.getElementById("myForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("close");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
 }



//generate password

function generatePassword() {
  var betaChar = chooseArray();
  var passLength = document.getElementById("many")
  var passwordLength = (passLength.value)
  password = "";
  for (var i = 1; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * betaChar.length);
    password += betaChar.substring(randomNumber, randomNumber +1);
  }
   return password;
}

//this was not used.
/* Assignment Code
var generateBtn = document.querySelector("#generate");

Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/ 


/*Testing

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
*/
/*Choosing characters
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
*/



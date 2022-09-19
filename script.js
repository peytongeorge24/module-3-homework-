// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = document.querySelector("#lowercase-checkbox");
var uppercase = document.querySelector("#uppercase-checkbox");
var special = document.querySelector("#special-checkbox");
var number = document.querySelector("#number-checkbox");
var numberSelector = document.querySelector("#size-selector");


//generate password 
function generatePassword() {
  var potentialPasswordChars = "";
  if (lowercase.checked) {
    potentialPasswordChars += "abcdefghijklmnopqrstuvwxyz"

  }
  if (uppercase.checked) {
    potentialPasswordChars += "abcdefghijklmnopqrstuvwxyz".toUpperCase()
  }
  if (number.checked) {
    potentialPasswordChars += "0123456789"
  }
  if (special.checked) {
    potentialPasswordChars += "[`!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~]"
  }
  var tempPassword=""
  for(var i =0;i<numberSelector.value;i++){
    let x = Math.floor(Math.random() *  potentialPasswordChars.length);
    tempPassword+=potentialPasswordChars[x] 
  } 


  return tempPassword 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
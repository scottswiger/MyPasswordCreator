// Assignment Code
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var nums = "0123456789"
var specialChars = "!@#$%^&*()_-+={}[];:'`~<,>.?/"
var generateBtn = document.querySelector("#generate");



function passwordLength() {
  getLength = prompt("Please type how many characters you would like your password to be (must be between 8 - 128 characters in length):")


  if (getLength < 8) {
    alert("Password length must exceed 8 characters");
    passwordLength();
  } else if (getLength > 128){
    alert("Password length must not exceed 128 characters");
    passwordLength();
  } else if (isNaN(getLength)){
    alert("Password length must be indicated by an integer value");
    passwordLength();
  } else {
    alert("Thank you for choosing the length, please follow the next prompts");
  }
  return getLength;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

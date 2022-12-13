// Assignment Code
var generateBtn = document.querySelector("#generate");
var getLength;
var getUppercase;
var getNums;
var getSpecial;


// Function to get the length of the password from the user
function passwordLength() {
  getLength = prompt("Please type how many characters you would like your password to be (must be between 8 - 128 characters in length):");

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
    alert("Thank you for choosing the length");
  }
  return getLength;
};

// Function to get the capitlization of the password from the user
function isUpperCase() {
  getUppercase = prompt("Would you like to include uppercase letters in your generated password? (Yes or No):");
  var getUppercase = getUppercase.toLowerCase();

  if (getUppercase == null || getUppercase == ""){
    alert("Please input Yes or No");
    isUpperCase();
  } else if (getUppercase == "yes" || getUppercase == "y"){
    getUppercase = true;
    return getUppercase;
  } else if (getUppercase == "no" || getUppercase == "n"){
    getUppercase = false;
    return getUppercase;
  } else {
    alert("Please input Yes or No");
    isUpperCase();
  }
  return getUppercase;
};

// Function to get the numerical value of the password from the user
function passwordNums() {
  getNums = prompt("Would you like to include integers in your password? (Yes or No):");
  var getNums = getNums.toLowerCase();

  if (getNums == null || getNums == ""){
    alert("Please input Yes or No");
    passwordNums();
  } else if (getNums == "yes" || getNums == "y"){
    getNums = true;
    return getNums;
  } else if (getNums == "no" || getNums == "n"){
    getNums = false;
    return getNums;
  } else {
    alert("Please input Yes or No");
    passwordNums();
  }
  return getNums;
};

// Function to get the special character value of the password from the user
function isSpecial() {
  getSpecial = prompt("Would you like your password to include Special characters? (Yes or No):")
  var getSpecial = getSpecial.toLowerCase();

  if (getSpecial == null || getSpecial == ""){
    alert("Please input Yes or No");
    isSpecial();
  } else if (getSpecial == "yes" || getSpecial == "y"){
    getSpecial = true;
    return getSpecial;
  } else if (getSpecial == "no" || getSpecial == "n"){
    getSpecial = false;
    return getSpecial;
  } else {
    alert("Please input Yes or No");
    isSpecial();
  }
  return getSpecial;
};

 //Function to generate the password itself 
 function createPassword() {
  passwordLength();
  isUpperCase();
  passwordNums();
  isSpecial();
 }

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

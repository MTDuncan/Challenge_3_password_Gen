// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let length = prompt("How many characters would you like your Password to be?")


let numbers = prompt("Would you like the password to contain numbers?")

let letters = prompt("Would you like your password to contain letters?")

let upperCase = prompt("Would you like lower-case in your password?")

let upperCase = prompt("would you like upper-case in your password?")

let specialCharacters = prompt("Would you like special characters in your password?")

function generatePassword(){





}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

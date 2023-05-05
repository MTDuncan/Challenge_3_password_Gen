// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let length = prompt("How many characters would you like your Password to be?","Minimum 8 Characters and Maximum 128 Characters")

let numbers = prompt("Would you like the password to contain numbers?","Yes or No")

let letters = prompt("Would you like your password to contain letters?","Yes or No")

let lowerCase = prompt("Would you like lower-case in your password?","Yes or No")

let upperCase = prompt("would you like upper-case in your password?","Yes or No")

let specialCharacters = prompt("Would you like special characters in your password?","Yes or No")


function generatePassword(){
  


}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

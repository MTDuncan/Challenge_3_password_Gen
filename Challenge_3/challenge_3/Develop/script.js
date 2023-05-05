// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  let password = "";
  
  let length = parseInt(prompt("How many characters would you like your password to be? (Minimum 8 Characters and Maximum 128 Characters)"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  let includeNumbers = prompt("Would you like to include numbers? (yes or no)").toLowerCase() === "yes";
  let includeLetters = prompt("Would you like to include letters? (yes or no)").toLowerCase() === "yes";
  let includeLowerCase = prompt("Would you like to include lower case letters? (yes or no)").toLowerCase() === "yes";
  let includeUpperCase = prompt("Would you like to include upper case letters? (yes or no)").toLowerCase() === "yes";
  let includeSpecialChars = prompt("Would you like to include special characters? (yes or no)").toLowerCase() === "yes";

  if (!includeNumbers && !includeLetters) {
    alert("Please select at least one character type.");
    return;
  }

  let allowedChars = "";

  if (includeNumbers) {
    allowedChars += "0123456789";
  }

  if (includeLetters) {
    allowedChars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeLowerCase) {
    allowedChars += "abcdefghijklmnopqrstuvwxyz";
  }

  if (includeUpperCase) {
    allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeSpecialChars) {
    allowedChars += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  
  if (!password) {
    return;
  }
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code

var confirmedCharacters = []
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"]

// Write password to the #password input

// 1. Prompt user to define password length

// 2. Prompt user to whether they want to include upper case and lower case letters (2 separate prompts?)

function generatePassword() {
  var result = []
  var userInput = parseInt(prompt("Please choose how many characters you would like your password to have."))
  console.log(typeof userInput)
  if (userInput < 8) {
    alert("Please choose a number of at least 8")
    return null
  }

  if (userInput > 128) {
    alert("Please choose a number of 128 or smaller")
    return null
  }

  if (Number.isNaN(userInput)) {
    alert("That's not a number")
    return null
  }

  var lowerCaseConfirm = confirm("Do you want to include lower case characters?");
  var upperCaseConfirm = confirm("Do you want to include upper case characters?");
  var specialCharactersConfirm = confirm("Do you want to include special characters?");
  var numbersConfirm = confirm("Do you want to include numbers?");
  console.log(lowerCaseConfirm, upperCaseConfirm, specialCharactersConfirm, numbersConfirm)

  if (!lowerCaseConfirm && !upperCaseConfirm && !specialCharactersConfirm && !numbersConfirm) {
    alert("Select something already!")
  }

  if (lowerCaseConfirm === true) {
    confirmedCharacters = confirmedCharacters.concat(lowerCaseCharacters)
  }

  if (upperCaseConfirm === true) {
    confirmedCharacters = confirmedCharacters.concat(upperCaseCharacters)
  }

  if (specialCharactersConfirm === true) {
    confirmedCharacters = confirmedCharacters.concat(specialCharacters)
  }

  if (numbersConfirm === true) {
    confirmedCharacters = confirmedCharacters.concat(numberCharacters)
  }

  console.log(confirmedCharacters)


  for (let i = 0; i < userInput; i++) {
    var randomNum = Math.floor(Math.random() * confirmedCharacters.length)
    result.push(confirmedCharacters[randomNum])
  }
  return result.join("")

  
}

//Upper case prompt - function returns true (includes upper case )
// 3. Prompt user to whether they want to include special characters
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// randomizing & arrays

// Possible to simplify into one array? - No, they need to be separated incase people select no upper case/ special characters.
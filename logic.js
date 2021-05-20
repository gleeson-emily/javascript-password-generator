// Assignment Code
var generateBtn = document.querySelector("#generate");





var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "^", "_", "`", "{", "|", "}", "~"];
var capitalCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var includeNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//var passwordsAllYes = specialCharacters.concat(capitalCharacters, lowerCase, includeNumbers);
//var passwordsNoSpecial = capitalCharacters.concat(lowerCase, includeNumbers);
//var passwordsNoCapitals = specialCharacters.concat(lowerCase, includeNumbers);
//var passwordsNoLower = specialCharacters.concat(capitalCharacters, includeNumbers);
//var passwordsNoNumbers = specialCharacters.concat(capitalCharacters, lowerCase);

 function answerQuestions() {
    var validChoice = false;
    do { 
    {
      var passLength = prompt("How long should your password be?");
      var specialPrompt = prompt("Do you want to include special characters?");
      var capitalPrompt = prompt("Do you want to include uppercase characters?");
      var lowerPrompt = prompt("Do you want to include lowercase characters?");
      var numbersPrompt = prompt("Do you want to include numerical characters?");
      var promptResponses = { 
        passLength, 
        specialPrompt, 
        capitalPrompt, 
        lowerPrompt, 
        numbersPrompt };
      } {
        if (passLength < 8 || passLength > 128); {
          alert("Your password must be between 8 and 128 characters long./nPlease enter a length between 8 and 128 characters.");
        } if ((specialPrompt != valid && capitalPrompt != valid && lowerPrompt != valid && numbersPrompt != valid)) {
          alert("You can't create a password with no characters! /nPlease select at least one class of characters.");
        } else 
        { validChoice = true;
        }
      }
    } while (!validChoice) {
      return promptResponses;
    }
  } 
function generatePassword() {
 var questions = answerQuestions();
 var passCharacters = [];
 var generatedPassword = "";

 
}


  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

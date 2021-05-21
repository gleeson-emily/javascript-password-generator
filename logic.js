// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "^", "_", "`", "{", "|", "}", "~"];
var capitalCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var includeNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

 function answerQuestions() {
    var validChoice = true;
    do { 
    {
      var passLength = prompt("How long should your password be?");
      var specialPrompt = confirm("Do you want to include special characters?");
      var capitalPrompt = confirm("Do you want to include uppercase characters?");
      var lowerPrompt = confirm("Do you want to include lowercase characters?");
      var numbersPrompt = confirm("Do you want to include numerical characters?");
      var promptResponses = { 
        passLength, 
        specialPrompt, 
        capitalPrompt, 
        lowerPrompt, 
        numbersPrompt };
      } {
        if ((passLength < 8 && passLength > 128)) {
       alert("Your password must be between 8 and 128 characters long. Please enter a length between 8 and 128 characters.");
       };
          } {
      if ((specialPrompt != validChoice && capitalPrompt != validChoice && lowerPrompt != validChoice && numbersPrompt != validChoice)) {
         alert("You can't create a password with no characters! Please select at least one class of characters.");
        } };
      } 
  while (!validChoice) {
      return promptResponses;
    }
  }


  //this function grabs the answers from answerQuestions and arranges them into an array based on the choices selected
function generatePassword() {
 var options = answerQuestions();
 var passCharacters = [];
 var generatedPassword = "";

 if (options.specialPrompt) {
   for (var x of specialCharacters)
   passCharacters.push(x);
 }

if (options.capitalPrompt) {
  for (var x of capitalCharacters)
  passCharacters.push(x);
}
if (options.lowerPrompt) {
  for (var x of lowerCase)
  passCharacters.push(x);
}
if (options.numbersPrompt) {
  for (var x of includeNumbers)
  passCharacters.push(x);
}
console.log(options)
for (var x = 0; x < options.passLength; x++ ) {
  generatedPassword += passCharacters[Math.floor(Math.random() * passCharacters.length)];
} 
 return generatedPassword;
};

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
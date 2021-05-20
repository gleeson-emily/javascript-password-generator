// Assignment Code
var generateBtn = document.querySelector("#generate");
//var passLength = ''


var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "^", "_", "`", "{", "|", "}", "~"];
var capitalCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var includeNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function passwordOptions() {
    var valid = true;
do {
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
        
    } while (promptResponses = (passLength >= 8 && passLength <= 128) (specialPrompt !=valid || specialPrompt = valid) (capitalPrompt !=valid || capitalPrompt = valid) (lowerPrompt != valid || lowerPrompt = valid) (numbersPrompt != valid || numberPrompt = valid))
    
    ) 

    if (promptResponses.specialPrompt = valid) {

      
    }
   }


    }
    
    
    {
       
    }
    else {
     "That's too short, or not a number!"
    }
 
  
  
    }
  };
}




 window.confirm("Do you want to include special characters?");)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); {
  
}
 
 
 
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

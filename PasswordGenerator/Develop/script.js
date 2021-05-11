// Assignment Code
//lowercase, uppercase, numbers, special characters
var generateBtn = document.querySelector("#generate");
var randomGenerator = [];

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

}
function btnPress(){
  lowercase();
  uppercase();
  numbers();
  specialcharacters();
  console.log(randomGenerator.toString())
}

function lowercase(){
if(confirm("Do you want lowercase letters?"))
  {
    console.log("Yes")
    randomGenerator.push(["a", "b", "c", "d", "e", "f", "g", "h",
     "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
      "u", "v", "w", "x", "y", "z"]);
  else
  {
    console.log("No")
  }
}

function uppercase(){
  if(confirm("Do you want uppercase letters?"))
  {
    console.log("Yes")
    randomGenerator.push(["A", "B", "C", "D", "E", "F", "G", 
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
    "T", "U", "V", "W", "X", "Y", "Z"]);
  }
  else
  {
    console.log("No")
  }
}

function numbers(){
  if(confirm("Do you want special characters letters?"))
  {
    console.log("Yes")
  }
  else
  {
    console.log("No")
  }
}

function specialcharacters(){
  if(confirm("Do you want special characters letters?"))
  {
    console.log("Yes")
  }
  else
  {
    console.log("No")
  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

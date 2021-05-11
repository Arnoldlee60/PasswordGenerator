// Assignment Code
//lowercase, uppercase, numbers, special characters
var generateBtn = document.querySelector("#generate");
var randomGenerator = [];
var pass = [];
var i;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("Password is: " + password);
  var passwordText = document.querySelector("#password");
  console.log("Passwordtext is: " + password);
  passwordText.value = password;


}
function generatePassword(){
  howLong();
  lowercase();
  uppercase();
  numbers();
  specialcharacters();
  creation();
  return (pass.join(""));
  //console.log(pass.toString())
  //console.log(randomGenerator.toString())
  //console.log("Password at the end: " + pass.toString()); //array value for password
  //console.log("Password is: " + pass.join("")) //password without commas
}

function creation(){
  for(var j = 0; j < i; j++){
    var x = randomGenerator[Math.floor(Math.random() * randomGenerator.length)]; 
    //console.log("My numbers/ letters are: " + x)
    pass.push(x);
  }
}

function howLong()
{
    i = prompt("How long do you want your password");
    if(i < 8 || i > 128)
    {
      alert("Try again");
      howLong(); //recursion
    }
    else{
    //console.log("My password is: " + i + " characters long!");
    }
}

function lowercase(){
if(confirm("Do you want lowercase letters?") == true)
  {
    console.log("I want lowercase letters!")
    randomGenerator.push("a", "b", "c", "d", "e", "f", "g", "h",
     "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
      "u", "v", "w", "x", "y", "z");
      
      //console.log("String so far: " + randomGenerator.toString());
  }
  else
  {
    //console.log("No lowercase letters");
  }
}

function uppercase(){
  if(confirm("Do you want uppercase letters?") == true)
  {
    console.log("I want uppercase letters!")
    randomGenerator.push("A", "B", "C", "D", "E", "F", "G", 
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
    "T", "U", "V", "W", "X", "Y", "Z");
    //console.log("String so far: " + randomGenerator.toString());
  }
  else
  {
    console.log("No uppercase letters")
  }
}

function numbers(){
  if(confirm("Do you want numbers?") == true)
  {
    console.log("I want numbers!")
    randomGenerator.push("1", "2", "3", "4", "5", "6", "7", "8", "9")
    //console.log("String so far: " + randomGenerator.toString());
  }
  else
  {
    console.log("No numbers")
  }
}

function specialcharacters(){
  if(confirm("Do you want special characters letters?") == true)
  {
    console.log("I want special characters!")
    randomGenerator.push("!", '"', "#", "$", "%", "^", "&", "'", "*", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", 
    "<", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"); // use \\ for one \
    //console.log("String so far: " + randomGenerator.toString());
  }
  else
  {
    console.log("No special letters")
  }
}

function reset(){
confirm("Do you want to continue?");
  var generateBtn = document.querySelector("#generate");
  var randomGenerator = [];
  var pass = [];
  var i;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code

var passwordLength;
var password;
var passwordInput;


var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var num = [0,1,2,3,4,5,6,7,8,9];

var char = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '='];

var selected = [];

var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var password = "";
  var passwordInput = "";
  
  while (true) {
    passwordLength = parseInt(prompt("Password between 8 - 128 characters"));
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    } 
    alert("Choose a password between 8 - 128 characters.");
 }

  var includeUpper = confirm("Select 'OK' for upper case letters");
  
  var includeLower = confirm("Select 'OK' for lower case letters");

  var includeChar = confirm("Select 'OK' for special characters");

  var includeNum = confirm("Select 'OK' for numbers");

  if(includeUpper) {
    // selected = selected + upper;
    selected = selected.concat(upper)
    // selected = [] + ['A', 'B' ...]
  }

  if(includeLower) {
    // selected = selected + lower;
    selected = selected.concat(lower)
    // selected = ['A', ...] + ['a'...]
  }

  if (includeChar) {
    selected = selected.concat(char)
  }

  if (includeNum) {
    selected = selected.concat(num)
  }

  if (selected <= 0) {
    alert('Choose at least one character criteria');
  }
  // if (upper) {
  //   passwordInput = upper;
  // } else if (lower) {
  //   passwordInput = lower;
  // } else if (char) {
  //   passwordInput = char;
  // } else if (num) {
  //   passwordInput = num;
  // } else if (upper && lower) {
  //   passwordInput = upper += lower;
  // } else if (upper && char) {
  //   passwordInput = upper += char;
  // } else if (upper && num) {
  //   passwordInput = upper += num;
  // } else if (lower && char) {
  //   passwordInput = lower += char;
  // } else if (lower && num) {
  //   passwordInput = lower += num;
  // } else if (char && num) {
  //   passwordInput = char += num;
  // } else if (upper && lower && char) {
  //   passwordInput = upper += lower += char;
  // } else if (upper && lower && num) {
  //   passwordInput = upper && lower && num;
  // } else if (upper && char && num) {
  //   passwordInput = upper += char += num;
  // } else if (lower && char && num) {
  //   passwordInput = lower += char && num;
  // } else if (upper && lower && char && num) {
  //   passwordInput = upper += lower += char += num;
  // } else if (!upper && !lower && !char && !num) 
  //   alert("You must select at least one, try again.")


  for (var i = 0; i <= passwordLength; i++){
    var randomCharacter = selected[Math.floor(Math.random() * selected.length)];
    password = password + randomCharacter;
  }

  // ""
  // password = "" + "B" ---> password = "B"
  // password = "B" + "G" ---> password = "BG"

  return (password);
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

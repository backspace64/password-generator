// Assignment code here
// Things we need:
// 1. Lowercase and uppercase letters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var passwordArr = [];
var result = [];
// 2. Numbers
var numbers = "0123456789";
// 3. Sp. Chars
var special = "$#!@%^&*/?";

//varibles
var userNum;
var userLower;
var userUpper;
var userSP;
var userLength;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(maxLengthpass) {
  // var passwordText = document.querySelector;
  
  // 1. Conditional to check our true/false values based upon our users response.
  if(userNum === true) {
    console.log 
    for(var i = 0; i < numbers.split('').length; i++) {
      passwordArr.push(numbers.split('')[i]);
    };
  };
  if(userLower === true) {
    for(var i = 0; i < lowercase.split('').length; i++) {
      passwordArr.push(lowercase.split('')[i]);
    };
  };
  if(userSP === true) {
    for( var i = 0; i < special.split('').length; i++) {
      passwordArr.push(special.split("")[i]);
    };
  };

  console.log(passwordArr)

  for(let i = 0; i < maxLengthpass; i++) {
    let randomLetter = passwordArr[Math.floor(Math.random() * passwordArr.length)];
    result.push(randomLetter)
  }
// verify that user wants to use certain items in passwords
function promptUser() {
  userNum = confirm('Do you want Numbers?');
  userLower = confirm('Do you want Lowercase Letters?');
  userSP = confirm('Do you want special chars.?');
}
};

//Add event listener to generate button
generateBtn.addEventListener("click",function() {
  console.log(passwordArr)
  generatePassword(parseInt('10'));
  console.log();
});

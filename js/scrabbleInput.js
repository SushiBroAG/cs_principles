// global variables go at the top
let POINTS = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];
let Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let player1score = 0;
let player2score = 0;

// utility functions
// check if is upper
function isupper(str) {
  return str === str.toUpperCase();
}

// check if is lower
function islower(str) {
  return str === str.toLowerCase();
}

// accesses the index for letters and connects them to the array of POINTS
function getPoints(letter){
  let index = Letters.indexOf(letter);
  return POINTS[index];
}

// console commands to display functions
console.log("testing point function " + getPoints("x"));

// console commands to display functions
console.log("testing index " + Letters.indexOf("c"));

// demonstrates how to add two integers from a set of strings
function add(x,y){
  let sum = x + y;
  let string = '$(sum)'; 
  console.log(string.length);
  console.log("the sum is ", sum);
}
// example of the addition ^^
add(6,7);

// you can in JS perform an islower/isupper and strlen
function compute_score(word){
    let score = 0;
    let index = 0;
    // calculates for lowercase letters
    for (i = 0, n = word.length; i < n; i++){
        if (islower(word[i])){
          console.log(word[i] + "this is lower case");
            // printf("accounting for lower case\n");
            // index = word[i]-'a';
        }
        // same for uppercase letters
        if (isupper(word[i])){
          console.log(word[i] + " is upper case");
            // printf("accounting for upper case\n");
            // index = word[i]-'A';
        }
        console.log("testing word i " + (word[i]));
        console.log("testing point function " + getPoints(word[i]));
        // score += getPoints(word[i]);
        console.log("testing the score " + score);
    }
}

// example score
compute_score("Hello");

// calculates the value of each character
function getInputValue() {
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("inputId").value;
    // Displaying the value
    output();
  }

  // output the total score value
  function output(){
    document.getElementById("output").value = inputVal;
  }
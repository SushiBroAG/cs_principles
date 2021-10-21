// PSEUDOCODE
// OBJECTIVE: take a message from a user and encrypt it
// then using the cypher, decrypt it

/*
1. Get input from user
2. take each characer then changing them to the alternate set of characters
    - be sure to consider capital letters and altnerate characters
3. display the cyphered message to the viewer
*/

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const Cyphers = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];

// utility functions
// check if is upper
function isupper(str) {
  return str === str.toUpperCase();
}

// check if is lower
function islower(str) {
  return str === str.toLowerCase();
}

// this takes the input string of characters and connects them to letters in the index Letters
let getInputValue = function(){
    document.getInputValue = inputId.index(Letters);
    return Cyphers[index];
}






// functions for the html, shifting characters in both directions + changes all letters to uppercase
function encrypt(char, shift) {
  let include =        
   alphabet.includes(
      char.toUpperCase()); 
     
  if (include){      
   let position =         
    alphabet.indexOf(
     char.toUpperCase());
      
   let newPosition = 
    (position + shift) %  
      alphabet.length;
   return alphabet[newPosition];
 } else  return char;
}


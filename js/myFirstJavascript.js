// only javascript goes here NO HTML...
// drop down window where you must click through to continue
alert("hello world");
// sends console message
console.log("this is coming from a separate file...")
// this sets a variable
let myVar = 5;
// allows programmer to send messages to console
console.log("my first console message");
// sends the variable to the console
console.log(myVar); 

// bool

// setting the width, height, x position, y position, and player variables
let playing = true;
// setting the size variables for each drawing
let width = 200;
let height = 450;
// setting position variables for each drawing
let y = 34;
let x = 300;
// sets player names
var player1 = "Tim";
const player2 = "Ralph";

// for loops in js
for (i=0; i<10; i++){
    console.log(i);
}

function draw() {
  // variable that allows the code to look for an element in the html document with an IDE of 'canvas'
    var canvas = document.getElementById('canvas');
    // if (true), sets the condition for the html to meet
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      // sets the position + size for the red drawing
      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(10, 10, width, height);
      // sets the position + size for the blue drawing
      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 30, 50, 50);
    }
  }

  // fullfil the draw function
  draw();
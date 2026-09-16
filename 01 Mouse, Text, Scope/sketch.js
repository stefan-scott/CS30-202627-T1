// Mouse, Text, Scope
// Mr. Scott
// Sept 15, 2026

// Global Variables
let x = 100;  let y = 100;
let c = "green";

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220); 
  mouseReport();  
  updateSquare();
}

function updateSquare(){
  //movement code here
  //keyCode is LAST PRESSED CODE.
  if(keyCode===40 && keyIsPressed){
    y+=2;
  }
  if(keyIsDown(LEFT_ARROW)){
    x -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x += 5;
  }
  if(keyIsDown(UP_ARROW)){
    y-=5;
  }


  //draw our character (a square) on screen
  fill(c); 
  square(x,y,50);
}

function mouseReport(){
  textSize(40);    
  //mouse-related system variables (managed by library)
  fill("black");
  let mouseInfo = mouseIsPressed + " "
                  + mouseButton.left + " "
                  + mouseButton.center + " "
                  + mouseButton.right;
  text(mouseInfo, mouseX, mouseY);
}



function keyPressed(){
  //this function calls automatically
  // - for single press captures
  print(key + " " + keyCode);

  if(key==="a"){
    c = "red";
  }
  else if(keyCode===32){ //space
    c = "yellow";
  }
  

  // for interest's sake → 
  // [ALT] - 2 to 4 digit number
  // – →←↓↑ unicode
}

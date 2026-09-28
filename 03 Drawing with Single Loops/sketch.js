// Drawing with Single Loops
// Mr. Scott
// Sept 25, 2026


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function worm(y, size){
  // use this function to draw a line of circles
  // y → (number)  height at which to draw line
  // size → (number)  diameter of each circle
  for(let x = size/2; x < width; x += size){
    circle(x,y,size);
  }
}

function gradientBackground(){
  // create a gradient to use as background
  noStroke();
  let h = 1; //rectangle height

  //could use FOR or WHILE loop here...
  let y = 0;
  while (y < height){
    let mappedY = map(y,0,height,0,255);

    // fill(mappedY); //fill(n) → greyscale
    fill(mappedY,mouseX/5,255-mappedY); //fill(r,g,b)

    rect(0, y, width, h);
    y += h;
  }

  stroke(0);
}

function challenge(){
  //circle and line/triangle challenge
}

function draw() {
  background(220);
  challenge();
  // gradientBackground();
  // worm(50, 30);
  // worm(height*0.5, 20);
}//screen updated here

// Noise v2
// Mr. Scott
// October 1, 2026

 
// global variables
let xTime = 5;  let xSpeed = 0.02;
let xStart = xTime;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  // frameRate(10);
}

function draw() {
  background(220);
  xTime = xStart;
  xStart += xSpeed;
  tower();
}

function tower(){
  //create a tower with circles of different
  //y position. X position will be 
  //randomly selected.
  
  for(let y = 0; y < height; y += 20){
    //perlin noise code (3 lines)
    let x = noise(xTime); //0-1
    x = map(x, 0, 1, 0, width);
    xTime += xSpeed;

    circle(x,y,20);
  }

}

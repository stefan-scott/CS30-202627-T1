// Random vs. Noise
// Mr. Scott
// Sept 29, 2026

// Global Var / Definitions
let minSize = 5;  let maxSize = 200;
let x1;  let y1;  //declare first 
let x2;  let y2;
// for noise()
let noiseTime = 10;  let noiseSpeed = 0.01;
// noiseTime → current coordinate on noise graph
// noiseSpeed → rate a which we move down the graph

async function setup() {
  createCanvas(windowWidth, windowHeight);
  y1 = height/2;  //initialize second
  x1 = width * 0.3;
  x2 = width * 0.7;
  y2 = height/2;

  // frameRate(10);
}

function draw() {
  background(220);
  // randomSeed(0);//use randomSeed to 
                //stabilize random()
  randomCircle();
  noiseCircle();
}

function noiseCircle(){
  // another circle, this time the diameter
  // is generated using noise(), smoothly
  fill(255,50,150);
  let d = noise(noiseTime);  //yield value b/w 0-1
  d = map(d,0,1,minSize,maxSize);
  noiseTime += noiseSpeed;
  circle(x2, y2, d);
}

function randomCircle(){
  // draw a fixed position circle with
  // randomly changing diameter
  fill(50,150,250);
  let d = random(minSize, maxSize);
  circle(x1, y1, d);
}

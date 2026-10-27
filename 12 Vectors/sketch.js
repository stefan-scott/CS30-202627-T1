// Vectors Demo
// Mr. Scott
// October 27, 2026



async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(0,5),-5);
  }

  move(){
    this.pos.add(this.vel);
  }
  
  display(){
    //display the ball
    circle(this.pos.x, this.pos.y, 20);

    //display the vectors
    if(true){
      stroke(255,0,0);
      line(0,0,this.pos.x, this.pos.y); //POS vector
      
      let endX = this.pos.x + this.vel.x;
      let endY = this.pos.y + this.vel.y;

      stroke(0,0,255);  //VEL vector
      line(this.pos.x, this.pos.y, endX, endY);
    
    }
  }
}
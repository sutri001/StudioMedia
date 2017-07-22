var x=0
var y=0
var movingDown=true
var movingRight=true

function setup() {
  createCanvas(800,300)
}

function draw() {
  //draw a background each frame to cover previous contents
  background(0)
  //draw our circle at current x and y coordnates
  ellipse(x,y,75,75)
    fill(255, 127, 22)
    noStroke()


  if(movingDown) {
    y=y+1
  } else {
    y=y-1
  }
  if (movingRight) {
    x=x+1
  } else {
    x=x-1
  }
  if (y>height) {
    movingDown=false
  }
  if (y<0) {
    movingDown=true
  }
  if (x>width) {
    movingRight=false
  }
  if (x<0) {
    movingRight=true
  }
}
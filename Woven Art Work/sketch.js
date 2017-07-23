var x=0
var y=0
var movingDown=true
var movingRight=true

function setup() {
  createCanvas(400,650)
}

function draw() {
  //make x get bigger by 1 each frame
  for (i = displayWidth; i > -20; i-=25){
    for (j = 0; j < displayHeight; j+=5){
      fill(0);
      rect(i-j,j,10,5);
    }
  }

  for (i = 25; i < displayWidth; i+=125){
    for (j = 25; j < displayHeight; j+=125){
      noStroke();
      fill(150);
      rect(i,j,100,100);
    }
  }

   for (i = 0; i < 100; i+=25){
    for (j = 25; j < displayHeight; j+=5){
      fill(255,0,0);
      rect(i+j,j,10,5);
    }
  }
}
var x;
var y;
var d;
var osc;

var colors;

function setup() {
  var canvas = createCanvas(1000,600)
  env = new p5.Env();
  env.setADSR(0.001,0.2,0.2,1);
  env.setRange(1,0);

  osc= new p5.Oscillator();
  osc.setType('square');
  osc.freq(2000);
  osc.amp(env);
  osc.start();

 canvas.mousePressed(playEnv);
  background(0);
  strokeWeight(8);
  //colors= color(random(255), random(255), random(255))
}

function draw() {
  osc.freq(map(mouseX,0,displayWidth,1,4000));

  for(var i=0; i<100; i=i+10) {
    
  x= random(0,width);
  y= random(0,height);
  d= random(5,600);
  var currentColor= color(random(255), random(255), random(255),85);
  fill(currentColor);
  rect(x,y,d,d);
  }
  
  for(var i=0; i<50; i=i+5) {
    
  x= random(width);
  y= random(height);
  d= random(5,500);
  var currentColor= color(random(255), random(255), random(255), 50);

  //stroke(255);
  var colors = stroke(random(255), random(255), random(255));
  line(x,y,d,d);
  }

  for(var i=0; i<50; i=i+5) {
    
  x= random(width);
  y= random(height);
  d= random(5,500);
  var currentColor= color(random(255), random(255), random(255), 40);
  fill(currentColor);
  ellipse(x,y,d,d);
  }

  if (frameCount > 600) {
    noLoop();
  }
}

function playEnv() {

  if (frameCount < 600){
     env.play();
  } else {
    env.stop();
  }
}


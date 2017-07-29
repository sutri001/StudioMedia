var x;
var y;
var d;
//var osc;

var colors;

var sifi;

function preload(){
   sifi = loadSound("sifi2.mov");
}

function setup() {
  var canvas = createCanvas(1000,600)
  //env = new p5.Env();
  //env.setADSR(0.001,0.2,0.2,1);
  //env.setRange(1,0);

  //osc= new p5.Oscillator();
  //osc.setType('square');
  //osc.freq(2000);
  //osc.amp(env);
  //osc.start();

  if (frameCount < 600){
  sifi.play();
  sifi.loop();
  }


 //canvas.mousePressed(playEnv);
  background(0);
  strokeWeight(8);
  //colors= color(random(255), random(255), random(255))
}

function draw() {
  //osc.freq(map(mouseX,0,displayWidth,1,4000));

  for(var i=0; i<100; i=i+10) {
    
  //set our variables to new values
  x= random(0,width);
  y= random(0,height);
  d= random(5,600);
  //pick a random color from our array
  var currentColor= color(random(255), random(255), random(255),85);
  //use our new color for our paint drip fill
  fill(currentColor);
  //draw our paint drip circle
  rect(x,y,d,d);
  }
  
  for(var i=0; i<50; i=i+5) {
    
  //set our variables to new values
  x= random(width);
  y= random(height);
  d= random(5,500);
  //pick a random color from our array
  var currentColor= color(random(255), random(255), random(255), 50);
  //use our new color for our paint drip fill
  //stroke(255);
  var colors = stroke(random(255), random(255), random(255));
  //draw our paint drip circle
  line(x,y,d,d);
  }

  for(var i=0; i<50; i=i+5) {
    
  //set our variables to new values
  x= random(width);
  y= random(height);
  d= random(5,500);
  //pick a random color from our array
  var currentColor= color(random(255), random(255), random(255), 40);
  //use our new color for our paint drip fill
  fill(currentColor);
  //draw our paint drip circle
  ellipse(x,y,d,d);
  }

  if (frameCount > 600) {
    noLoop();
    sifi.amp(0);
  }
}

//function playEnv() {

  //if (frameCount < 600){
     // env.play();
  //} else {
    //env.stop();
  //}
//}


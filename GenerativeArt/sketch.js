var x
var y
var d

function setup() {
  createCanvas(1000,600)
}

function draw() {
  for(var i=0; i<100; i=i+10) {
    
  //set our variables to new values
  x= random(0,width)
  y= random(0,height)
  d= random(5,600)
  //pick a random color from our array
  var currentColor= color(random(255), random(255), random(255),85)
  //use our new color for our paint drip fill
  fill(currentColor)
  //draw our paint drip circle
  rect(x,y,d,d)
  }
  
  for(var i=0; i<50; i=i+5) {
    
  //set our variables to new values
  x= random(0,width)
  y= random(0,height)
  d= random(5,500)
  //pick a random color from our array
  var currentColor= color(random(255), random(255), random(255), 50)
  //use our new color for our paint drip fill
  fill(currentColor)
  //draw our paint drip circle
  ellipse(x,y,d,d)
  }

  if (frameCount >200)
    noLoop()
}


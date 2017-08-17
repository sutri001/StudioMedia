var x = []
var y = []
var circleColor = []
var colors=[]
var numberOfCirlces = 300

function setup() {
  createCanvas(1200,800)
  strokeWeight(5)
  colors = [
    color(30,175,255,50),
    color(75,255,100,50),
    color(51,153,200,50),
    color(255,100,102,50),
    color(100,255,255,50)
  ]
  //assign the starting x and y point for each circle
  for(var i=0; i<numberOfCirlces; i=i+1) {
    x[i] = random(0, width)
    y[i] = random(0, height)
    circleColor[i]= random(colors)
  }
}

function draw() {
  for(var i=0; i<numberOfCirlces; i=i+1) {
    // draw circles
    //ellipse(x[i],y[i],50,50)
    // move circles in random direction
    x[i] = x[i] + random(-10,10)
    y[i] = y[i] + random(-10,10)
    
  for(var j=0; j<numberOfCirlces; j=j+1) {
    //find distance to every other circle
    var distance = dist(x[i],y[i],x[j],y[j])
    if(distance < 55) {
      stroke(circleColor[i])
      line(x[i],y[i],x[j],y[j])
    }
    if(distance < 60) {
    	noStroke()
    	//fill(circleColor[i])
    	ellipse(x[i],y[i],10,10)
    }
    }
  }
  if (frameCount > 800) {
    noLoop()
  }
}
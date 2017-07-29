var x
var y
var d

var colors=["#000", "#ccc", "#0AF","#FFF"]

function setup() {
  createCanvas(1000,600)
  noStroke()
}

function draw() {
  for(var i=0; i<100; i=i+10) {
    
  x= random(0,width)
  y= random(0,height)
  d= random(5,400)

  var currentColor= random(colors)
  fill(currentColor)
  rect(x,y,d,d)
  }
  
  for(var i=0; i<50; i=i+5) {
    
  x= random(0,width)
  y= random(0,height)
  d= random(5,250)

  var currentColor= random(colors)
  fill(currentColor)
  ellipse(x,y,d,d)
  }

  if (frameCount > 400)
    noLoop()
}


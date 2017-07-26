
var currentColor

function setup() {
   createCanvas(500,500);
   noCursor()
   
}

function draw() {
	background(255,2)
}

function mousePressed () {
	fill()
	ellipse(mouseX, mouseY, 300,400)	
}

function mouseMoved() {
	currentColor = color(random(255), random(255), random(255))
	fill(currentColor)
	ellipse(mouseX, mouseY, 100, 100)
}

function mouseDragged () {
	ellipse(mouseX, mouseY, 300,400)
}
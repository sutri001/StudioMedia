
function setup() {
   createCanvas(500,500);
   noCursor()
}

function draw() {
	fill (255, 2)
}

function mousePressed () {
	ellipse(mouseX, mouseY, 300,400)
	fill(255,25)	
}

function mouseMoved() {
	ellipse(mouseX, mouseY, 100, 100)
	fill(200,55,0,5)
}

function mouseDragged () {
	rect(mouseX, mouseY, 100,100)
	fill(0,55,200,5)
}
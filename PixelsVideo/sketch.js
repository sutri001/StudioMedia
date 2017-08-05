function setup() {
  createCanvas(400,300)
}

function draw() {
  loadPixels()
  
  // do some stuff to the pixels
  for (var row=0; row<height; row=row+1) {
    for(var col=0;col<width;col=col+1) {
      //pixel arrary shows 4 pixels at a time that is why we multiply by 4
      var index=(row * width + col) * 4
      
      pixels[index+0] = random(0,255) //r
      pixels[index+1] = row   //g
      pixels[index+2] = col //b
      pixels[index+3] = 255 //alpha
    }
  }
  updatePixels()
}
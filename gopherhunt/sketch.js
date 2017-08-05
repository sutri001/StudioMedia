var capture;

//var img;

var classroomFence;
var inClassroom = false;
var classroom = [
    {lat: 39.41031, lon: -76.594813},  // top left  
    {lat: 39.410501, lon: -76.594448},  // top right
    {lat: 39.410169, lon: -76.594266},  // bottom right
    {lat: 39.409946, lon: -76.594791},  // bottom left
];

var chapelFence;
var inChapel = false;
var chapel = [
    {lat: 39.409222, lon: -76.593642},  // top left  
    {lat: 39.409134, lon: -76.593438},  // top right
    {lat: 39.409208, lon: -76.593178},  // bottom right
    {lat: 39.409047, lon: -76.593543},  // bottom left
];

var preshouseFence;
var inPreshouse = false;
var preshouse = [
    {lat: 39.407832, lon: -76.588857},  // top left  
    {lat: 39.407838, lon: -76.588492},  // top right
    {lat: 39.407562, lon: -76.588506},  // bottom right
    {lat: 39.407612, lon: -76.588849},  // bottom left
];

//function preload(){
	//img = loadImage("assets/preshouse.jpg")
//}

function setup() {
  //Create and size a canvas (w, h)
  createCanvas(windowWidth,windowHeight);
  background(255)
  if(geoCheck() == true){
    //geolocation is available
    print("GopherHunt FA17 Digital Media Programming")
    print("by")
    print("Adewale Ogunsanya, Rahlana Smith, Surmaria Tribble, and Andrew Bernstein")
    

  }else{
    //error getting geolocaion
    textSize(50)
    text("Location Unavailable", width/2, height/2);
  }

  classroomFence = new geoFencePolygon(classroom, insideClassroom, outsideClassroom, 'mi')
  chapelFence = new geoFencePolygon(chapel, insideChapel, outsideChapel, 'mi')
  preshouseFence = new geoFencePolygon(preshouse, insidePreshouse, outsidePreshouse, 'mi')
}

function draw(){
  
  background(255);

  if(inClassroom){
    fill(255,0,0);
    ellipse(100,100,100,100);
  }

  if(inChapel){
    video(capture, 0, 0, width, height);
  }

  if(inPreshouse){
  	fill(45,150,200,90);
    ellipse(100,100,400,400);
  	//image(img, 100, 100, 100,100);
  }



}


// classroom
function insideClassroom(position){
    console.log("POS: ", position)
    print("INlat: " + position.latitude);
    print("INlong: " + position.longitude);
    print("user is inside of the fence")
    inClassroom = true;

}

function outsideClassroom(position){
    print("OUTlat: " + position.latitude);
    print("OUTlong: " + position.longitude);
    print("user is outside of the fence")
    inClassroom = false;
}

// chapel
function insideChapel(position){
    console.log("POS: ", position)
    print("INlat: " + position.latitude);
    print("INlong: " + position.longitude);
    print("user is inside of the fence")
    inChapel = true;

    capture = createCapture(VIDEO);
    //capture.size(width,height);
    capture.hide();
}

function outsideChapel(position){
    print("OUTlat: " + position.latitude);
    print("OUTlong: " + position.longitude);
    print("user is outside of the fence")
    inChapel = false;
}

function insidePreshouse(position){
    console.log("POS: ", position)
    print("INlat: " + position.latitude);
    print("INlong: " + position.longitude);
    print("user is inside of the fence")
    inPreshouse = true;

}

function outsidePreshouse(position){
    print("OUTlat: " + position.latitude);
    print("OUTlong: " + position.longitude);
    print("user is outside of the fence")
    inPreshouse = false;
}


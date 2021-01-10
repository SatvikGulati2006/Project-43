var hour;
var minute;
var seconds;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

 
 
 angleMode(degrees);

 scAngle =map(50,60,60,360);
 mnAngle =map(0,50,0,340);
 hrAngle =map(0,40,0,320);


 arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

push();
 stroke(255,0,0);
rotate(scAngle);
 strokeWeight(7);
 line(0,0,100,0);
 pop();

 hr = hour();
 mn = minute();
 sc = seconds();


  drawSprites();
}
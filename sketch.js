//our custom variable
let pointX;
let mouseDist;
let triY;


function setup() {
  //create the canvas element
createCanvas(900,500);
//giving point avalue of 300
pointX = 600;
triY=300;

rectMode(CENTER);
}

function draw() {
  background(120,80,200);
  mouseDist = dist(mouseX,mouseY,pmouseX,pmouseY);
  print(mouseDist);
  smooth();
  //line and point style
  strokeWeight(5);
  //point expects and x and y coordinate
  point(pointX,300);
  strokeWeight(mouseDist);


  // line expects two x,y coordinates
  //then connects the coordinates
  line(mouseX,mouseY,pmouseX,pmouseY);


  //ellipse style
  noStroke();
  fill(190,55,12,50);
  //ellipse expects an x,y coordinates
  //and width and Height
  //ellipse ezpects an x,y coodinate
  stroke(random(255), random(255), random(255));

  //rec styles
  //fills in shapes with color
  strokeWeight(mouseDist);
  fill(30,120,45);

  rect(width/3, height/3, mouseX,100);
  noFill();


  //rectangle expecting x,y coordinates
  //and width and Height


  //triangle style
  //triangle expects three sets of x,y
  strokeWeight(30,30);
  stroke(120,150,150);
  triangle(800,12,850,200,700,triY);

  if(mouseIsPressed){pointX=200;}

  else {pointX=600;}

  if(keyIsPressed){triY=600;}

  else {triY=300;}
}

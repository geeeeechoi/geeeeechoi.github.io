let r = 0;
let g = 0;
let b = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  r = map (mouseX, 0, windowWidth, 0, 255);
  b = map (mouseX, 0, windowWidth, 255, 0);
  r = map (mouseY, 0, windowHeight, 0, 255);
  background(r,g,b);



  fill(200);
  triangle(18, 18, 18, 360, 81, 360)

  fill(200);
  triangle(18, 18, 18, 360, 81, 360)

  fill(200)
  rect(130, 130, 100, 100);

  stroke(200)
  strokeWeight(4)
  line(300,100,20,400)

  fill(200);
  triangle(400, 400, 500, 600, 500, 600)

  fill(250,118,222);
  ellipse(mouseX, mouseY, 64, 64);

  fill(200)
  triangle(800,18, 600,700, 800, 600);

  fill(240);
  arc(479, 300, 280, 280, PI, TWO_PI);



}

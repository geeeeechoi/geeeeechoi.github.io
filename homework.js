function setup() {
  // put setup code here}
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
  // put drawing code here


}

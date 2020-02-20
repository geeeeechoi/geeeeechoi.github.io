let bubbles = [];

let flower;
let bamboo;
let bird;
let butterfly;
let dragon;

let xoff;
let yoff;




function preload (){

  flower = loadImage("images/flower.png");
  dragon = loadImage("images/dragon.png");
  bamboo = loadImage("images/bamboo.png");
  bird = loadImage("images/bird.png");
  butterfly = loadImage("images/butterfly.png");

  }



function setup(){
  createCanvas(windowWidth, windowHeight);
  for (let i =0; i < 10; i++){
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Bubble (x, y, r);
    bubbles.push(b)
  }
}

function mousePressed (){
  for (let i = 0; i <bubbles.length; i++){

    bubbles[i].clicked(mouseX, mouseY);
  }

}

function draw(){
  // background(0);
  for (let i = 0; i <bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();

    xoff += 0.01;
    yoff += 0.08;

    let nX = noise(xoff)*width;
    let nY = noise(xoff)*height;

    fill(255);
    ellipse(nX, nY, 6, 6);
  }


}


class Bubble{

  constructor(x,y,r){

    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  clicked(px, py){
    let d = dist(px, py, this.x, this.y);
    if (d < this.r){
      this.brightness = 255
      ;
    }
  }

  move(){

    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);


  }

  show(){

    image(flower, this.x, this.y, this.r, this.r);
    image(dragon, this.x, this.y, this.r, this.r);
    image(butterfly, this.x, this.y, this.r, this.r);
    image(bird, this.x, this.y, this.r, this.r);
    image(bamboo, this.x, this.y, this.r, this.r);
  }
}

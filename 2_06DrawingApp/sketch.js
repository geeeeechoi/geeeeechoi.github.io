let flower;
let dragon;
let butterfly;
let bird;
let bamboo;


let flowerbrushBool = false;
let dragonbrushBool = false;
let butterflybrushBool = false;
let birdbrushBool = false;
let bamboobrushBool = false;

// redX = 40;
// redY = 40;

flX = 100;
flY = 650;

btfX = 230;
btfY = 650;

bX = 360;
bY = 650;

dX = 490;
dY = 650;

bbX = 620;
bbY = 650;


redBrushBool = false;

function preload(){
  flower = loadImage("images/flower.png");
  dragon = loadImage("images/dragon.png");
  butterfly = loadImage("images/butterfly.png");
  bird = loadImage("images/bird.png");
  bamboo = loadImage("images/bamboo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  imageMode(CENTER);


}

function draw() {

  // noStroke();
  // rect(0, height-50, width, 100);
  image(flower,100, 650 , flower.width/12, flower.width/12);
  image(butterfly,230, 650, butterfly.width/8, butterfly.height/8);
  image(bird,360, 650, bird.width/10, bird.height/10);
  image(dragon,490, 650, dragon.width/11.5, dragon.height/11.5);
  image(bamboo,620, 650, bamboo.width/10, dragon.height/10);


 //  if (flowerbrushBool == true){
 //    //flowerbrush
 //    }
 //    // fill(255, 0, 0);
 //
 //   image(flower, flX, flY, flower.width/10, flower.width/10);
 // }
}

function mousePressed(){
  if( dist(mouseX, mouseY, flX, flY) < 50){
    flowerbrushBool = true;
    dragonbrushBool = false;
    butterflybrushBool = false;
    birdbrushBool = false;
    bamboobrushBool = false;

    print("flower");
    print(flowerbrushBool);
  }

  if(flowerbrushBool == true){
    flowerBrush();
  }

  if( dist(mouseX, mouseY, btfX, btfY) < 50){
    flowerbrushBool = false;
    dragonbrushBool = false;
    butterflybrushBool = true;
    birdbrushBool = false;
    bamboobrushBool = false;

    print("butterfly");
    print(butterflybrushBool);
  }

  if(butterflybrushBool == true){
    butterflyBrush();
  }

  if( dist(mouseX, mouseY, dX, dY) < 50){
    flowerbrushBool = false;
    dragonbrushBool = true;
    butterflybrushBool = false;
    birdbrushBool = false;
    bamboobrushBool = false;

    print("dragon");
    print(dragonbrushBool);
  }

  if(dragonbrushBool == true){
  dragonBrush();
  }

  if( dist(mouseX, mouseY, bX, bY) < 50){
    flowerbrushBool = false;
    dragonbrushBool = false;
    butterflybrushBool = false;
    birdbrushBool = true;
    bamboobrushBool = false;

    print("bird");
    print(birdbrushBool);
  }

  if(birdbrushBool == true){
   birdBrush();
  }

  if( dist(mouseX, mouseY, bbX, bbY) < 30){
    flowerbrushBool = false;
    dragonbrushBool = false;
    butterflybrushBool = false;
    birdbrushBool = false;
    bamboobrushBool = true;

    print("bamboo");
    print(bamboobrushBool);
  }

  if(bamboobrushBool == true){
   bambooBrush();
  }


}

function mouseDragged(){
  if(flowerbrushBool == true){
    flowerBrush();
  }

  if(butterflybrushBool == true){
    butterflyBrush();
  }

  if(dragonbrushBool == true){
    dragonBrush();
  }

  if(birdbrushBool == true){
    birdBrush();
  }

  if(bamboobrushBool == true){
    bambooBrush();
  }

}


function flowerBrush(){
  // fill(255, 0, 0);
  // ellipse(mouseX, mouseY, 20, 20);
  if(mouseX > 0 && mouseY < 600){
  image(flower, mouseX, mouseY, flower.width/10, flower.width/10);
}

}

function dragonBrush(){
  if(mouseX > 0 && mouseY < 600){
  image(dragon, mouseX, mouseY, dragon.width/8.5, dragon.height/8.5);
  }
}

function butterflyBrush(){
  if(mouseX > 0 && mouseY < 600){
  image(butterfly, mouseX, mouseY, butterfly.width/6, butterfly.height/6);
  }
}


function birdBrush(){
  if(mouseX > 0 && mouseY < 600){
  image(bird, mouseX, mouseY, bird.width/8, bird.height/8);
  }
}

function bambooBrush(){
  if(mouseX > 0 && mouseY < 600){
  image(bamboo, mouseX, mouseY, bamboo.width/2, bamboo.height/2);
  }
}

function keyTyped(){
    if(key === 's') {
      save("sketch1.png");
    }
  }

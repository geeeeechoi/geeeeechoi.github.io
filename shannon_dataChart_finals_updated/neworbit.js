let img;
let particles = [];
let dailyData;
let dataCollection;
let titleArray = [];
let vidDur;
let vidDurArray = [];
let mappedVidDur;
let mappedVidDurArray = [];
function preload() {
  img = loadImage("images/snow.png");

  dailyData = loadTable('dailyData.csv', 'csv', 'header');
  dataCollection = loadTable('dataCollection.csv', 'csv', 'header');


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
  noStroke();
  imageMode(CENTER);
  //go throught the table and add the values to arrays
  for(let i = 0; i < dailyData.getRowCount(); i++) {
    title = dailyData.getString(i, 'Vidtitle');
    vidDur = dailyData.getNum(i, 'vidLightDur');

    //push the values to arrays
    vidDurArray.push(vidDur);
    titleArray.push(title);

  }

  //the vidDur raw values might be a little too big, so
  //we can remap them. this will map to ranges from 10-50 pixels
  for(let j = 0; j < vidDurArray.length; j++){
    mappedVidDur = map(vidDurArray[j], min(vidDurArray), max(vidDurArray), 10, 50);
    //add each remapped value to a new mappedDur array
    mappedVidDurArray.push(mappedVidDur);

  }


  //now we cycle through an array and add the values to our objects
  //the arrays shoudl all be the same length, so it doesn't matter
  //which one you use in the for loop
  for(let i = 0; i < mappedVidDurArray.length; i++) {
    //you need to add the data to each class object
    //by passing through each array position to each object
    let p = new Particle(titleArray[i], mappedVidDurArray[i]);
    particles.push(p);
  }

}

function draw() {
  background(0, 0, 0);

  let mousePos = createVector(mouseX, mouseY);

  if(mouseIsPressed) {
    forceScaler = 20;
    //titleArray.push(title)
  } else {
    forceScaler = -35;
  }

  for(let i = 0; i < particles.length; i++) {



    let p = particles[i];


    let d = dist(mousePos.x, mousePos.y, p.pos.x, p.pos.y);


    let magnitude = forceScaler / (d+30);


    let forceDirection = p.pos.sub(mousePos);


    forceDirection.normalize();


    let newForce = forceDirection.mult(magnitude);


    p.force.add(newForce);

    p.update();
    p.draw();
  }


}


class Particle {

  //the variables are passed to each object through their constructors
  constructor(title, vidDur) {
    //right now these values are static but you can pass new values
    //in useing the constructor
    this.pos = createVector(windowWidth/2, windowHeight/2);
    this.vel = createVector(random(-10, 10), random(-10, 10));
    this.accel = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    this.color = [random(255), 255, 255];
    this.force = createVector(0, 0);
    this.drag = 0.97;

    //these are the new variables passed in from the above for loop
    this.title = title;
    this.vidDur = vidDur;
  }

  update() {
    this.vel.add(this.force);
    this.vel.mult(this.drag);
    this.pos.add(this.vel);
  }

  draw() {
    //use the new values passed in for image widht/height and titles
    image(img, this.pos.x, this.pos.y, this.vidDur, this.vidDur);
    if(mouseIsPressed){
      fill(255);
      text(this.title, this.pos.x+this.vidDur/2, this.pos.y+5);
    }


  }
}

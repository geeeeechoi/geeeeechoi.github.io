
let satellites = [];
let n = 500;
let fC = 200; //our version of the time counter. Starting at 200 gets all the satellites scattered.
let duration;
let vidDurationArray = [];
function preload(){
  chicagoWeather = loadTable('chicagoWeather.csv', 'csv', 'header');
  personalDataSet = loadTable('dataCollection.csv', 'csv', 'header');
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 //canvas.id("myChart");
 const NUM_PARTICLES = 200;

 for (var i = 0; i < personalDataSet.getRowCount(); i++){
   duration = personalDataSet.getNum(i, 'totalVidDuration');
   vidDurationArray.push(duration);
 }

for (i = 0; i < vidDurationArray.length; i++) {
 satellites[i] = new Orbit(1,1,vidDurationArray[i]);
 }


}

function draw() {
 background(0, 50);
 //translate(width / 2 - mouseX, 0); //camera pan based on mouseX location
for (i = 0; i < satellites.length; i += 1) {
 satellites[i].display(fC);
 }

fC += 0.03;

}

function mousePressed() {
 if (mouseButton == LEFT) {
 satellites.push(new Orbit(4,3));
 }
}

class Orbit {
 constructor(r,s,d) {
 this.red1 = r; //this is just sent an argument when mouse pressed
 this.speed1 = s;
 this.mass = d/600;
 this.radius = random(width * 0.3, width * 0.5);
 this.speed = this.speed1 * sqrt(this.mass / this.radius * 3);

this.shade = random(0, 100);
 this.red = this.red1 * this.shade;
 }

display(fC) {
 this.fC = fC;
 this.aY = (this.radius / 2 - (mouseY / height) * this.radius);
 strokeWeight(this.mass * (sin(this.speed * this.fC * PI / 2 + PI / 2) + 2) / 2);
 stroke(this.red, this.shade, this.shade, 125);
 fill(255);
 ellipse(this.radius * sin(this.speed * this.fC * PI / 2) + width / 2, this.aY * cos(this.speed * this.fC * PI / 2) + height / 2,
 this.mass * (sin(this.speed * this.fC * PI / 2 + PI / 2) + 2), this.mass * (sin(this.speed * this.fC * PI / 2 + PI / 2) + 2));
 }
}

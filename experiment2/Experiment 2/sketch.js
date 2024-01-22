let backColor;
let randVal;
function setup() {
  createCanvas(720, 720);
  noCursor();
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  background(225)
  noStroke();
}

function draw() {
  randVal = random();
  if(randVal < 0.5) {
    fill(360 - mouseY / 2, 100, 100);
    rect(mouseX, mouseY, random(mouseX), random(mouseY));
  }
  else {
    fill(100, 360 - mouseY / 2, 100);
    ellipse(mouseX, mouseY, random(mouseX), random(mouseY))
  }
  if(mouseIsPressed) {
    backColor = color(mouseY / 2, 100, 100);
    background(backColor);
  }
}

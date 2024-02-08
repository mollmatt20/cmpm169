let width = 800;
let height = 800;
let teapots = [];
let positions = [];

function preload() {
  for(let i = 0; i < 5; i++) {
    teapots[i] = loadModel('assets/teapot.obj');
  }
  sky = loadImage('assets/sky.jpg');
}

function setup() {
  canvas = createCanvas(width, height, WEBGL);
  positions.push(createVector(-15, -15));
  positions.push(createVector(12, 6));
  positions.push(createVector(12, -15));
  positions.push(createVector(-15, 6));
  positions.push(createVector(-1, -5));
}

function draw() {
  // we set the light before we do anything
  pointLight(255,255,255, -100, -100, 0);
  ambientLight(255);
  
  // Set the background color
  background(0);
  
  push();
  noStroke();
  translate(0,0,-500);
  texture(sky);
  scale(1.5);
  plane(width * 1.2, height * 1.2);
  pop();
  
  scale(20);
  
  for(let i = 0; i < teapots.length; i++) {
    push();
    translate(positions[i]);
    rotateZ(frameCount * 0.1);
    model(teapots[i]);
    pop();
  }
}
let width = 800;
let height = 800;
let teapots = [];
let positions = [];
let video;
let videoTexture;

function preload() {
  for(let i = 0; i < 5; i++) {
    teapots[i] = loadModel('assets/teapot.obj');
  }
}

function setup() {
  canvas = createCanvas(width, height, WEBGL);
  video = createVideo('assets/TeaCommercial.mp4')
  video.size(width, height);
  video.loop();
  video.hide();
  positions.push(createVector(-16, -15));
  positions.push(createVector(10, 6));
  positions.push(createVector(10, -15));
  positions.push(createVector(-16, 6));
  positions.push(createVector(-2, -5));
}

function draw() {
  // we set the light before we do anything
  pointLight(255,255,255, -100, -100, 0);
  ambientLight(255);
  
  // Set the background color
  background(255);
  
  push();
  texture(video);
  pop();
  
  scale(20);
  
  for(let i = 0; i < teapots.length; i++) {
    push();
    translate(positions[i]);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1);
    rotateZ(frameCount * 0.1);
    noStroke();
    ambientMaterial(73,121,116);
    model(teapots[i]);
    pop();
  }
  
}
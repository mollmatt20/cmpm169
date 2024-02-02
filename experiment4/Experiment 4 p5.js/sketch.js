let img;
let sound;
let x1, y1, x2, y2, w, h;
let isDrawing;

function preload() {
  img = loadImage('assets/persistenceofmemory.jpg');
  sound = loadSound('assets/bad_dream.mp3');
}

function setup() {
  createCanvas(620, 430);
  image(img, 0, 0);
  isDrawing = false;
  sound.setVolume(0.3);
  sound.setLoop(true);
}

function draw() {
  if(isDrawing) {
    x1 = mouseX;
    y1 = mouseY;
    x2 = round(x1);
    y2 = round(y1 + random(1, 5));
    w = random(50, 80);
    h = random(20, 50);
    set(x2, y2, get(x1, y1, w, h));
  }
}

function mousePressed() {
  isDrawing = !isDrawing;
  if(isDrawing) {
    sound.play();
  }
  else {
    sound.pause();
  }
}
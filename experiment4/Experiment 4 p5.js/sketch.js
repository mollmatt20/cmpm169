'use strict';

var img;
let isDrawing;

function preload() {
  img = loadImage('data/pic.png');
}

function setup() {
  createCanvas(1024, 780);
  image(img, 0, 100);
  isDrawing = false;
}

function draw() {
  if(isDrawing) {
    var x1 = mouseX;
    var y1 = mouseY;
  
    var x2 = round(x1);
    var y2 = round(y1 + random(1, 5));

    var w = 100;
    var h = 100;

    set(x2, y2, get(x1, y1, w, h));
  }
}

function mousePressed() {
  isDrawing = !isDrawing;
}
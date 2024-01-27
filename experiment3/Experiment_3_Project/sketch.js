let points1 = [];
let points2 = [];
let points3 = [];
let points4 = [];
let isGreenWalk;
let isOrangeWalk;

function setup() {
  createCanvas(800, 500);
  points1.push(createVector(Math.round(random(300, 500)), Math.round(random(200, 400))));
  points2.push(createVector(Math.round(random(300, 500)), Math.round(random(200, 400))));
  isGreenWalk = false;
  isOrangeWalk = false;
  strokeWeight(5);
}

function draw() {
  background(255);
  stroke(255, 0, 0);
  doRandomWalk(points1);
  stroke(0, 0, 255);
  doRandomWalk(points2);
  if(isGreenWalk) {
    stroke(0, 255, 0);
    doRandomWalk(points3);
  }
  else {
    isGreenWalk = checkForIntersection(points1, points2, points3);
  }
  if(isGreenWalk && isOrangeWalk) {
    stroke(255, 165, 0);
    doRandomWalk(points4);
  }
  else {
    isOrangeWalk = checkForIntersection(points2, points3, points4)
  }
}

function doRandomWalk(point_arr) {
  let x_val = point_arr[point_arr.length - 1].x;
  let y_val = point_arr[point_arr.length - 1].y;
  x_val += Math.round(random(-10, 10));
  y_val += Math.round(random(-10, 10));
  x_val = constrain(x_val, 0, width);
  y_val = constrain(y_val, 0, height);
  point_arr.push(createVector(x_val, y_val)); 
  for (let i = 0; i < point_arr.length; i++) {
    point(point_arr[i].x, point_arr[i].y);
  }
}

function checkForIntersection(rand1, rand2, rand3) {
  let lastPoint = rand1[rand1.length - 1];
  for (let i = 0; i < rand2.length; i++) {
    if (lastPoint.x == rand2[i].x && lastPoint.y == rand2[i].y) {
      rand3.push(createVector(lastPoint.x, lastPoint.y));
      return true;
    }
  }
  return false;
}
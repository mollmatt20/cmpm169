let points1 = [];
let points2 = [];
let points3 = [];
let intersected;

function setup() {
  createCanvas(400, 400);
  points1.push(createVector(200, 200));
  points2.push(createVector(300, 300));
  intersected = false;
  strokeWeight(5);
}

function draw() {
  background(255);
  stroke(255, 0, 0);
  doRandomWalk(points1);
  stroke(0, 0, 255);
  doRandomWalk(points2);
  if(intersected) {
    stroke(0, 255, 0);
    doRandomWalk(points3);
  }
  else {
    checkForIntersection(points1, points2, points3);
  }
}

function doRandomWalk(point_arr) {
  let x_val = point_arr[point_arr.length - 1].x;
  let y_val = point_arr[point_arr.length - 1].y;
  x_val += floor(random(-5, 5));
  y_val += floor(random(-5, 5));
  x_val = constrain(x_val, 0, width - 1);
  y_val = constrain(y_val, 0, height - 1);
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
      intersected = true;
    }
  }
}
let data = [45, 67, 120, 220, 70]; // Sample data
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  createCircles();
}

function createCircles() {
  let maxValue = max(data);
  let spacing = 70;
  for (let i = 0; i < data.length; i++) {
    let radius = map(data[i], 0, maxValue, 10, 50);
    let x = (i + 1) * spacing;
    let y = random(100, windowWidth - 200);
    let speed = random(1, 3); // Random speed for each circle
    let direction = random([-1, 1]); // Random direction
    circles.push({
      x: x,
      y: y,
      radius: radius,
      speed: speed,
      direction: direction
    });
  }
}

function draw() {
  background(220);
  drawCircleChart();
  moveCircles();
}

function drawCircleChart() {
  for (let i = 0; i < circles.length; i++) {
    let circleData = circles[i];
    let x = circleData.x;
    let y = circleData.y;
    let radius = circleData.radius;

    fill(0, 0, 255);
    circle(x, y, radius * 2);

    // Displaying data values inside circles
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(14);
    text(data[i], x, y);
  }
}

function moveCircles() {
  for (let i = 0; i < circles.length; i++) {
    let circleData = circles[i];
    circleData.x += circleData.speed * circleData.direction;

    // Bounce off the walls
    if (circleData.x + circleData.radius >= width || circleData.x - circleData.radius <= 0) {
      circleData.direction *= -1;
    }
  }
}
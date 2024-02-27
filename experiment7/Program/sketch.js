let data = [2674, 2148, 2022, 1991, 1896, 1874, 1815, 1773, 1715, 1628]; 
let names = ['Meowscarada', 'Fuecoco', 'Chandelure', 'Sylveon', 'Tinkaton', 'Lucario', 'Mimikyu', 'Clodsire', 'Gengar', 'Gardevoir'];
let colors = ['#004900', '#fc0000', '#040403', '#fec1e0', '#fc007e', '#00a9fc', '#fff326', '#563d2d', '#3f1554', '#ffeaf4'];
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < data.length; i++) {
    let dataCircle = {
      diameter: map(data[i], 0, max(data), 50, 150),
      x: random(width),
      y: random(height),
      xSpeed: random(-5, 5),
      ySpeed: random(-5, 5),
    }
    circles.push(dataCircle);
  }
}

function draw() {
  background(255);
  for(let i = 0; i < circles.length; i++) {
    let dataCircle = circles[i];
    dataCircle.x += dataCircle.xSpeed;
    dataCircle.y += dataCircle.ySpeed;
    if (dataCircle.x + (dataCircle.diameter / 2) >= width || dataCircle.x - (dataCircle.diameter / 2) <= 0) {
      dataCircle.xSpeed *= -1;
    }
    if (dataCircle.y + (dataCircle.diameter / 2) >= height || dataCircle.y - (dataCircle.diameter / 2) <= 0) {
      dataCircle.ySpeed *= -1;
    }
    
    // Draw circle
    fill(colors[i]);
    circle(dataCircle.x, dataCircle.y, dataCircle.diameter);
    
    // Displaying data values inside circles
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(14);
    text(names[i], dataCircle.x, dataCircle.y);
    
    fill(0);
    textAlign(CENTER, CENTER);
    text("Votes: " + data[i], dataCircle.x, dataCircle.y + dataCircle.diameter / 2 + 10);
  }
}
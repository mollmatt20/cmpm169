let data = [45, 67, 120, 220, 70]; // Sample data

function setup() {
  createCanvas(400, 400);
  background(220);
  drawCircleChart();
}

function drawCircleChart() {
  let maxValue = max(data);
  let diameter = 50;
  let spacing = 70;

  for (let i = 0; i < data.length; i++) {
    let radius = map(data[i], 0, maxValue, 10, 50);
    let x = (i + 1) * spacing;
    let y = height / 2;

    fill(0, 0, 255);
    circle(x, y, radius * 2);

    // Displaying data values inside circles
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(14);
    text(data[i], x, y);

    // Displaying text label inside circles
    fill(0);
    textAlign(CENTER, TOP);
    text("Value: " + data[i], x, y + radius + 10);
  }
}

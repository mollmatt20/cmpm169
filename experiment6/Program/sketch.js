const grammarObj = {
    "origin": ["#slogan.capitalize#, #person#!", "#person# thinks '#slogan#' is stupid"],
    "slogan": ["i'm lovin it", "finger lickin good", "eat fresh", "come hungry, leave happy", "we have the meats"],
    "person": ["Barack Obama", "Mr. Beast", "Ice Spice", "Hamburglar", "Princess Zelda", "Nancy Pelosi"]
};

let grammar;

function setup() {
  grammar = tracery.createGrammar(grammarObj);
  createCanvas(windowWidth, windowHeight);
  console.log(grammar.flatten("#origin#"));
}

function draw() {
  if (frameCount % 10 == 0) {
    stroke(0);
    textSize(random(14, 24));
    fill(color(random(255), random(255), random(255)));
    newOut = grammar.flatten("#origin#");
    text(newOut, mouseX + random(-5, 5), mouseY + random(-5, 5));
  }
}

function mousePressed() {
  clear();
}

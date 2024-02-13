const grammarObj = {
    "origin": ["#slogan.capitalize#, #person#!", "#person# thinks '#slogan#' is stupid"],
    "slogan": ["i'm lovin it", "finger lickin good", "eat fresh", "no one out pizzas the hut", "eatin good in the neighborhood", "come hungry, leave happy", "we have the meats"],
    "person": ["Barack Obama", "Mr. Beast", "Ice Spice", "Hamburgalar", "Princess Zelda", "Nancy Pelosi"]
  };

let grammar;

function setup() {
  grammar = createTraceryGrammar();
  createCanvas(800, 800);
  console.log(flattenGrammar())
}

function draw() {
  if (frameCount % 50 == 0) {
    newOut = flattenGrammar();
    stroke(0);
    textSize(2**random(2,6));
    text(newOut, random(width), random(height));
  }
}

function createTraceryGrammar() {
  // this is not needed if we are not doing node.js
  // const tracery = require('tracery-grammar');

  return tracery.createGrammar(grammarObj);
}

function flattenGrammar() {
  return grammar.flatten("#origin#");
}
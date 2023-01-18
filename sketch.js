let myDictionary;
// preload JSON data
function preload(){
  myDictionary = loadJSON("https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json");
}

function setup() {
  createCanvas(800, 600);
  background(0);
  textSize(32);
  textAlign(CENTER);
  fill(255);
}

function draw() {
  let keys = Object.keys(myDictionary);
    let gray = random(255);
    fill(gray);
    let angle = random(-10, 10);
    push();
    translate(random(width), random(height));
    rotate(angle);
  
  for (var i = 0; i < 50; i++) {
      textSize(i);

    let randomKey = keys[int(random(keys.length))];
    text(randomKey, random(width), random(height));
  }
}

function setup() {
  createCanvas(800, 600);
}



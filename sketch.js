let osc;
let tremelo;

let myDictionary;
// preload JSON data
function preload(){
  myDictionary = loadJSON("https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json");
}

function setup() {
  createCanvas(2000, 1500);
  background(0);
  textSize(32);
  textAlign(CENTER);
  fill(255);

  osc = new p5.Oscillator();
  osc.freq(220);
  osc.setType('sine');
  osc.amp(0.5);
}

function draw() {
  let keys = Object.keys(myDictionary);
    let gray = random(255);
    fill(gray);

  for (var i = 0; i < 100; i++) {
      textSize(i);

    let randomKey = keys[int(random(keys.length))];
    text(randomKey, random(width), random(height));

    let freq = random(200, 800);
    let amp = random(0.1, 0.5);

    osc.freq(freq);
    osc.amp(amp);
  }
}

function mousePressed() {
  osc.start();
}

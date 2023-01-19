let osc;
let speech;
let myDictionary;
let angle = 5;
let scalar = 1000;
let speeder = 0.15;



// preload JSON data
function preload(){
  myDictionary = loadJSON("js/data/words_dictionary.json");
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

  speech = new p5.Speech(voiceReady); //callback, speech synthesis object
  speech.started(startSpeaking);

  function voiceReady() {
    console.log(speech.voices);
  }

  function startSpeaking(){
    console.log("starting to speak");
  }
}


function draw() {
  let keys = Object.keys(myDictionary);
  let gray = random(255);
  fill(gray);

  let word;
  for (var i = 0; i < 100; i++) {
    textSize(random(i));

    word = keys[int(random(keys.length))];
    text(word, random(width), random(height));

    let freq = random(200, 800);

    osc.freq(freq);
    osc.amp(0.01);

    //speech.setVoice('SpeechSynthesisVoice');
    speech.setVoice(floor(29*random()+0.5));
    speech.setPitch(0.01+random()*.59);
    speech.setRate(0.5+random()*1.5);
    speech.speak(word);
  }

  translate(width / 2, height / 2);
  for (let i = 0; i < 200; i++) {
    let offset = map(i, 0, random(20), 0, TWO_PI);
    let x = scalar * cos(angle + offset);
    let y = scalar * sin(angle + offset);
    fill(255, 255, 255, map(i, 0, 10, 15, 0));
    ellipse(random(x), random(y), random(1000), 255);

     fill(random(255));
    var w = random(1, 5);
    var h = random(1, 5);
    rect(random(x), random(y), w, h);
    rect(random(x), random(y), w, h);
    rect(random(x), random(y), w, h);
    rect(random(x), random(y), w, h);
  }
  angle += speeder;


}

function mousePressed() {
  osc.start();
}

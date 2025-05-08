let lyrics = [
  "it's been a while...",
  "since you heard from me",
  "i stay alone",
  "protect my energies",
  "found a little love",
  "lost my sanity",
  "can we do it over?",
  "and then one day",
  "it just came to me",
  "an we do it over?"
];

let colors = [
  [255, 182, 193],      
  [153, 178, 141],       
  [245, 205, 215],
  [193, 208, 181]
  
];

let fonts = [];
let droppedLyrics = [];
let currentLine = 0;

function preload() {

  fonts.push(loadFont('font/Horge.otf'));   
  fonts.push(loadFont('font/AstonScript.ttf')); 
  fonts.push(loadFont('font/ZTFormom.otf')); 
  fonts.push(loadFont('font/HelveticaNeueItalic.ttf')); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(255, 255, 255);
  noStroke();

  for (let lyric of droppedLyrics) {
    lyric.y += lyric.speed; 
    fill(lyric.color[0], lyric.color[1], lyric.color[2], lyric.opacity); 
    textSize(lyric.size);
    textFont(lyric.font);
    text(lyric.text, lyric.x, lyric.y);
  }

  noFill();
  stroke(255);
  ellipse(mouseX, mouseY, 20, 20);
}

function mousePressed() {
  droppedLyrics.push({
    text: lyrics[currentLine],
    x: mouseX,
    y: mouseY,
    speed: random(1, 3), 
    size: random(20, 180), 
    color: colors[currentLine % colors.length], 
    font: fonts[floor(random(fonts.length))] 
  });

  currentLine = (currentLine + 1) % lyrics.length; 
}

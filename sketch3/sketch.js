let lyrics = [
  "i'm not asking for too much,",
  "i'm asking the wrong motherfucker.",
  "just cause we're in love,",
  "doesn't mean that we're...",
  "right for each other.",
  "can't keep makin' a home out of you,",
  "just 'cause you're asking me to...",
  "i'm not asking for too much...",
  "can we do it over?"
];

let currentLyric = 0;
let currentChar = 0;
let typedText = "";
let typewriter;
let typeSound;
let myFont;

function preload() {
  typewriter = loadImage("typewriter.png");
  typeSound = loadSound("type.mp3");
  myFont = loadFont("Relationship of mélodrame.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  background(255, 195, 210); 

  let textSizeValue = width * 0.05;
  textSize(textSizeValue);

  let typewriterSize = 0.8;
  let newWidth = typewriter.width * typewriterSize;
  let newHeight = typewriter.height * typewriterSize;
  let yOffset = height - newHeight;
  image(typewriter, width / 2 - newWidth / 2, yOffset, newWidth, newHeight - 100);

  fill(255);
  text(typedText, width / 2, height / 2 - 300);
}

function keyPressed() {
  if (currentChar < lyrics[currentLyric].length) {
    let nextChar = lyrics[currentLyric].charAt(currentChar);
    typedText += nextChar;
    currentChar++;
    typeSound.play();
  } else {
    
    if (currentLyric < lyrics.length - 1) {
      currentLyric++;
      currentChar = 0;
      typedText = "";
    }
  }
}

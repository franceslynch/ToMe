let cdplayer;
let cd;
let angle = 0;
let spinning = false;

let song;

function preload() {
  cdplayer = loadImage("img/cdplayer.png");
  cd = loadImage("img/cd.png");
  Horge = loadFont("font/Relationship.ttf");
  Other = loadFont("font/ZTFormom.otf");
  song = loadSound("audio/song.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
  noCursor();
}

function draw() {
  background(193, 208, 181);
  
  fill('white');
  textSize(120);
  textFont(Horge);
  text("hover to play", width / 2, height / 2 + 575);

  let cdX = width / 2;
  let cdY = height / 2;
  let cdSize = 700;
  image(cdplayer, cdX, cdY, cdSize, cdSize);

  if (dist(mouseX, mouseY, cdX, cdY) < cdSize / 2) {
    if (!song.isPlaying()) {
      song.loop();
    }

    spinning = true;

    fill('white');
    textSize(55);
    textFont(Other);
    text('"to me" by alina baraz', width / 2, height / 3.5);
  } else {
    spinning = false;

    if (song.isPlaying()) {
      song.pause();
    }
  }

  push();
  translate(mouseX, mouseY);
  if (spinning) {
    angle += 0.05;
  }
  rotate(angle);
  image(cd, 0, 0, 300, 300);
  pop();
}

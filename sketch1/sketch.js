let cdplayer;
let cd;
let angle = 0;
let spinning = false;

let song;

function preload() {
  cdplayer = loadImage("cdplayer.png");
  cd = loadImage("cd.png");
  Horge = loadFont("Horge.otf");
  Other = loadFont("ZT Formom.otf");
  song = loadSound("song.mp3");
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
  textSize(100);
  textFont(Horge);
  text("Hover to Play", width / 2, height / 2 + 600);

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
    textSize(50);
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

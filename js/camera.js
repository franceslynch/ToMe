let lyrics = [
  "here's to good people,",
  "good nights,",
  "good highs,",
  "good health,",
  "some tears,",
  "some stress,",
  "but I count my blessings.",
  "here's to good music,",
  "great love,",
  "little time to feel alive,",
  "little time to get it right."
];

let captions = [
  ["raw meat twins\nat palm treeee", "jenn and i take on\na vintage photobooth!", "love my littos <3"],
  ["El Zoologico :p", "boo! halloweekend", "bumble bussss"],
  ["senior szn :(", "life is worth the livingggg", "should've stole this pillow..."],
  ["love me a sunset", "guess what song we're dancing to", "#aestheticAF"],
  ["you know its bad\nwhen you crying on break...", "def got some on my snorlax pillow", "we love a good lash glue!"],
  ["#1 photoshop hater", "poor kia", "design majors be like"],
  ["i get to call this my home???", "ma ma :)", "SUSHI SUSHI SUSHI"],
  ["fam @ beyond", "pco lil sis take on dabin!", "blaaaack piiiink"],
  ["frogman", "our fav photo hehe", "the day he asked me\nto be his gf..."],
  ["a few hours earlier i thought\ni was bouta lolz #tsunamiwarning ", "you only turn 21 once", "spontaneous chicago trip ahh"],
];

let photoPaths = [];
let photos = [];
let currentIndex = 0;
let alpha = 0;
let myFont;
let isFinalFade = false;
let fadeOutAlpha = 0;
let fadeInTextAlpha = 0;
let fadeOutTextAlpha = 255;
let startFinalLyricFade = false;

function preload() {
  myFont = loadFont("font/Relationship.ttf");

  photoPaths = [
    ["img/people1.jpg", "img/people2.jpg", "img/people3.jpg"],
    ["img/nights1.jpg", "img/nights2.jpg", "img/nights3.jpg"],
    ["img/highs1.jpeg", "img/highs2.jpg", "img/highs3.jpeg"],
    ["img/health1.jpg", "img/health2.jpg", "img/health3.jpeg"],
    ["img/tears1.jpeg", "img/tears2.jpeg", "img/tears3.jpeg"],
    ["img/stress1.jpeg", "img/stress2.jpeg", "img/stress3.jpeg"],
    ["img/blessings1.jpeg", "img/blessings2.jpeg", "img/blessings3.jpg"],
    ["img/music1.jpg", "img/music2.jpeg", "img/music3.jpeg"],
    ["img/love1.jpg", "img/love2.jpeg", "img/love3.jpeg"],
    ["img/alive1.jpeg", "img/alive2.jpg", "img/alive3.jpeg"],
    [null, null, null]
  ];

  for (let i = 0; i < photoPaths.length; i++) {
    photos[i] = [];
    for (let j = 0; j < photoPaths[i].length; j++) {
      if (photoPaths[i][j]) {
        photos[i][j] = loadImage(photoPaths[i][j]);
      } else {
        photos[i][j] = null;
      }
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont(myFont);
  imageMode(CENTER);
  textSize(48);
}

function draw() {
  background(255);

  if (isFinalFade) {
    fadeOutAlpha += 5;
    if (fadeOutAlpha >= 255) {
      noLoop(); // freeze on final fade
    }
    return;
  }

  let currentLyric = lyrics[currentIndex];

  if (currentLyric === "little time to get it right.") {
    textSize(130); 
    if (startFinalLyricFade) {
      if (fadeOutTextAlpha > 0) {
        fadeOutTextAlpha -= 2;
      } else {
        isFinalFade = true;
      }
      fill(255, 182, 193, fadeOutTextAlpha);
    } else {
      if (fadeInTextAlpha < 255) {
        fadeInTextAlpha += 3;
      }
      fill(255, 182, 193, fadeInTextAlpha);
    }
    text(currentLyric, width / 2, height / 2);
  } else {
    let imgSize = width / 4;
    let spacing = width / 3;
    let y = height / 2.5;
    if (alpha < 255) alpha += 5;

    for (let i = 0; i < 3; i++) {
      let x = spacing * (i + 0.5);
      tint(255, alpha);
      if (photos[currentIndex][i]) {
        image(photos[currentIndex][i], x, y, imgSize, imgSize);
        if (
          mouseX > x - imgSize / 2 &&
          mouseX < x + imgSize / 2 &&
          mouseY > y - imgSize / 2 &&
          mouseY < y + imgSize / 2
        ) {
          noTint();
          fill(143, 151, 121);
          textSize(50);
          textLeading(50);
          text(captions[currentIndex][i], x, y + imgSize / 2 + 70);
        }
      }
    }

    noTint();
    fill(255, 182, 193);
    textSize(100);
    text(currentLyric, width / 2, height - 180);
  }
}

function mousePressed() {
  if (
    currentIndex === lyrics.length - 1 &&
    fadeInTextAlpha >= 255 &&
    !startFinalLyricFade
  ) {
    startFinalLyricFade = true;
    return;
  }

  if (currentIndex < lyrics.length - 1) {
    currentIndex++;
    alpha = 0;
    fadeInTextAlpha = 0;
  }
}

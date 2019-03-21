let spotsv = [];
let spots = [];
let az = ["A", "B", "C", "D", "E"];

function setup() {
  createCanvas(600, 400);
  background(0);

  let index = int(random(0, az.length));
  let t = az[index];

  textAlign(CENTER, CENTER);
  textSize(400);
  fill("#f48");
  text(t, 300, 200);

  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let c = pixels[index];
      let b = brightness(c);
      if (b > 1) {
        spotsv.push(createVector(x, y));
      }
    }
  }
}

function draw() {
  background(0);
  let sv = spotsv[int(random(0, spotsv.length))];
  let x = sv.x;
  let y = sv.y;

  let isPush = true;
  for (let s of spots) {
    let d = dist(x, y, s.x, s.y);
    if (d - 3 < s.r) {
      isPush = false;
      break;
    }
  }

  if (isPush) {
    spots.push(new Spot(sv.x, sv.y));
  }

  for (let s of spots) {
    s.show();
  }

  if (spots.length >= 200) {
    noLoop();
  }
}

class Spot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 5;
  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.r);
  }
}

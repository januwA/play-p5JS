let b;
let isUp = true;

function setup() {
  createCanvas(640, 360);
  b = new Ball();
}

function draw() {
  background(200);
  b.show();
  b.update();

  stroke(0);
  strokeWeight(1);
  line(0, height / 2 + b.r, width, height / 2 + b.r);
}

class Ball {
  constructor() {
    this.x = 0;
    this.y = height / 2;
    this.r = 8;

    this.history = []; // x,y 的历史纪录
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);

    beginShape();

    for (let i = 0; i < this.history.length; i++) {
      let { x, y } = this.history[i];
      ellipse(x, y, this.r * 2);
    }
    endShape();
  }

  update() {
    if (this.x > width + this.r) {
      this.x = 0;
    } else {
      this.x += 10;
    }

    if (this.y > height / 4 && isUp) {
      this.y -= 2;
      if (this.y <= height / 4) {
        isUp = false;
      }
    } else {
      this.y += 2;
      if (this.y >= height / 2) {
        isUp = true;
      }
    }

    let v = createVector(this.x, this.y);
    this.history.push(v);

    if (this.history.length > 800) {
      this.history.splice(0, 1);
    }
  }
}
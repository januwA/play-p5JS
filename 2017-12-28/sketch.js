var ball1, ball2;

function setup() {
  createCanvas(600, 400);
  ball1 = new Ball(300, 200);
  ball2 = new Ball(250, 200);
}

function draw() {
  background(0);
  ball1.update();
  ball1.show();

  ball2.update();
  ball2.show();

  if (ball1.isIntersects(ball2)) {
    ball1.cahngeColor();
    ball2.cahngeColor();
  }
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 48;
    this.color = color(255, 0, 255, 150);
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);
  }
  update() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  cahngeColor() {
    this.color = color(random(255), random(255), random(255), 120);
  }
  isIntersects(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d * 2 < this.r * 2) {
      return true;
    } else {
      return false;
    }
  }
}

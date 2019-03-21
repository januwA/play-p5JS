var ball;
function setup() {
  createCanvas(600, 400);
  ball = new Ball();
}

function draw() {
  background(0);
  ball.run();
}

class Ball {
  constructor() {
    this.x = 300;
    this.y = 200;

    this.speedX = 4;
    this.speedY = 4;

    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
  }
  run() {
    this.show();
    this.update();
    ball.move();
  }
  show() {
    stroke(this.r, this.g, this.b);
    strokeWeight(3);
    noFill();
    ellipse(this.x, this.y, 40, 40);
  }
  update() {
    if (this.x > width || this.x < 0) {
      this.speedX = this.speedX * -1;
      this.updateStrockColor();
    }
    if (this.y > height || this.y < 0) {
      this.speedY = this.speedY * -1;
      this.updateStrockColor();
    }
  }
  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  updateStrockColor() {
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
  }
}

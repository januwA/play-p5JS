let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 15; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 30);
    let bubble = new Bubble(x, y, r);
    bubbles.push(bubble);
  }
}

function draw() {
  background(0);
  for (let obj of bubbles) {
    if (mouseIsPressed) {
      obj.clicked(mouseX, mouseY);
    }
    obj.run();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.brightness = 0;
  }

  run() {
    this.move();
    this.show();
  }

  clicked(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.r) {
      this.brightness = 255;
    }
  }

  show() {
    strokeWeight(2);
    stroke(255);
    fill(this.brightness, 150);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  intersects(obj) {
    let d = dist(this.x, this.y, obj.x, obj.y);
    if (d < this.r + obj.r) {
      // 两个圆心的距离小于两个圆的半径时
      return true;
    } else {
      return false;
    }
  }

  changeColor(bright) {
    this.brightness = bright;
  }
}

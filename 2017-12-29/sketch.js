var balls = []
var len = 10;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < len; i++) {
    balls.push(new Ball(random(width), random(height)))
  }
}

function draw() {
  background(0);
	// 两个 for来 处理ball之间的碰撞
  for (let i = 0; i < balls.length; i++) {
		balls[i].update();
		balls[i].show();
		for (let j = 0; j < balls.length; j++) {
			// dist 像是在求 弦
			if (i !=j && balls[i].isIntersects(balls[j])) {
				balls[i].cahngeColor()
				balls[j].cahngeColor()
			}
		}
	}

}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 48;
    this.color = color(255, 0, 255, 150)
  }

  show() {
    noStroke()
    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);
  }
  update() {
    this.x += random(-1, 1)
    this.y += random(-1, 1)
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

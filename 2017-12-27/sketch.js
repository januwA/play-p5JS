var balls = [];
var ballw = 30;
var ball = null;

function mouseDragged() {
  // mousedown
  console.log(1);
  balls.push(new Ball(mouseX, mouseY))
}

function touchStarted() {
  balls.splice(0, 1);
}

function setup() {
  createCanvas(600, 400);
	background(0)
}

function draw() {
	// background(0)
  for (var i = balls.length - 1; i > 0; i--) {
    balls[i].update();
    balls[i].show();
  }
  if (balls.length > 30) {
    balls.splice(0, 1);
  }
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    noStroke()
    fill(255, 0, 200, 100)
    ellipse(this.x, this.y, ballw, ballw);
  }

  update() {
    this.x += random(-1, 1)
    this.y += random(-1, 1)
  }
}

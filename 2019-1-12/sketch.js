/**
 * * 存储位置历史记录
 * https://www.youtube.com/watch?v=vqE8DMfOajk&t=65s
 */
let particle;
let particles = [];
let gravity = 0.1; // 重力

function setup() {
  createCanvas(600, 400);
  particle = new Particle(300, 200);
  particle2 = new Particle(300, 200);
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(200);

  particle.update();
  particle.show();

  for (let i = 0; i < particles.length; i++) {
    particles[i].update2();
    particles[i].show();
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0; // 速度
    this.history = []; // x,y 的历史纪录
  }

  update() {
    this.y += this.ySpeed;
    this.ySpeed += gravity;

    if (this.y > height) {
      this.y = height;
      this.ySpeed *= -0.9;
    }
    let v = createVector(this.x, this.y);
    this.history.push(v);

    if (this.history.length > 25) {
      this.history.splice(0, 1);
    }
  }

  update2() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    for (let i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-10, 10);
      this.history[i].y += random(-10, 10);
    }

    let v = createVector(this.x, this.y);
    this.history.push(v);

    if (this.history.length > 25) {
      this.history.splice(0, 1);
    }
  }

  show() {
    fill(0);
    ellipse(this.x, this.y, 20);

    noFill();
    beginShape();
    for (let i = 0; i < this.history.length; i++) {
      let { x, y } = this.history[i];
      // ellipse(x, y, i);
      vertex(x, y);
    }
    endShape();
  }
}
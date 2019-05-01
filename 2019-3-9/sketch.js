// 使用Perlin噪声来创建一个二维流场
// Video: https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=6

let inc = 0.1;
let scl = 10;
let cols, rows;
let fr;
let zoff = 0;
let particles = [];
let flowfield;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");
  flowfield = new Array(rows * cols);
  for (let i = 0; i < 1000; i++) {
    particles.push(new Particle());
  }
  background(255);
}

function draw() {
  // randomSeed(10); // 确保每一次软件执行时都会返回一样的伪随机数。
  let yoff = 0;
  for (let x = 0; x < rows; x++) {
    let xoff = 0;
    for (let y = 0; y < cols; y++) {
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      // TWO_PI 是个值为 6.28318530717958647693 的数学常量。它是圆形周长与直径的比例的两倍
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1); // 设置一个长度
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 100);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;
    zoff += 0.001;
  }
  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }
  fr.html(`frameRate:${floor(frameRate())}`);
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height)); // 位置
    this.vel = createVector(0, 0); // 速度
    this.acc = createVector(0, 0); // 加速度
    this.maxspeed = 2; // 最高速度
    this.prevPos = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    strokeWeight(1);
    stroke(0, 5);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrevPos()
  }

  updatePrevPos() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrevPos();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrevPos();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrevPos();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrevPos();
    }
  }

  follow(vectors) {
    let x = floor(this.pos.x / scl);
    let y = floor(this.pos.y / scl);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force);
  }
}

// ES6面向对象编程（OOP）中的继承概念
// https://www.youtube.com/watch?v=MfxBfRD0FVU&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=19

let particles = [];
let offset = 40;

function setup() {
  createCanvas(400, 400);
  init();
}

function init() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    if (random(1) < 0.5) {
      particles.push(new Particle(width / 2, height / 2));
    } else {
      particles.push(new Confetti(width / 2, height / 2));
    }
  }
}

function draw() {
  background(0);

  for (const p of particles) {
    p.update();
    p.show();

    if (p.edge()) {
      init();
    }
  }
}

class Particle extends p5.Vector {
  constructor(x, y) {
    super(x, y);
    this.velocity = p5.Vector.random2D();
  }
  update() {
    this.add(this.velocity);
  }
  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 10, 10);
  }

  edge() {
    if (
      this.x < 0 - offset ||
      this.x > width + offset ||
      this.y < 0 - offset ||
      this.y > height + offset
    ) {
      return true;
    }
  }
}

class Confetti extends Particle {
  constructor(x, y) {
    super(x, y); // 执行父类的 constructor
    this.r = 10; // 定义自己的属性
  }

  // 覆写父类的方法
  show() {
    noStroke();
    fill(255, 0, 0);
    square(this.x, this.y, this.r);
  }
}

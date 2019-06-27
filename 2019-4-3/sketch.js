// 使用Matter.js物理引擎和p5.js创建plinko模拟
// video: https://www.youtube.com/watch?v=KakpnfDv_f0&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_&index=6

let Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let particles = [];
let plinkos = [];
let bounds = [];
let cols = 14;
let rows = 16;

function setup() {
  createCanvas(400, 600);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  // world.gravity.y = 2; // 设置重力
  createParticle();
  // 生成静态点
  let spacing = width / cols;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = spacing / 2 + i * spacing;
      if (j % 2 === 0) {
        x -= spacing / 2;
      }
      let y = spacing + j * spacing;
      plinkos.push(new Plinko(x, y, 6));
    }
  }

  // 底部边界
  let b = new Boundary(width / 2, height + 25, width, 50);
  bounds.push(b);

  // 底部框框
  for (let i = 0; i < cols + 1; i++) {
    let x = i * spacing;
    let h = 50;
    let w = 4;
    let y = height - h / 2;
    let b = new Boundary(x, y, w, h);
    bounds.push(b);
  }
}

function createParticle() {
  const p = new Particle(width / 2, 6, 6);
  particles.push(p);
}

function draw() {
  if (frameCount % 20 === 0) {
    createParticle();
  }
  background(0, 0, 0);
  // update(engine, [delta=16.666], [correction=1])
  Engine.update(engine, 1000 / 40);
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.show();
    if (p.isOffScreen()) {
      World.remove(world, p.body);
      particles.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < plinkos.length; i++) {
    const p = plinkos[i];
    p.show();
  }
  for (let i = 0; i < bounds.length; i++) {
    const p = bounds[i];
    p.show();
  }
}

class MyModel {
  constructor(body) {
    this.body = body;
    World.add(world, [this.body]);
  }
}

class Particle extends MyModel {
  constructor(x, y, r) {
    const options = {
      // friction: 0.001, // 摩擦
      restitution: 0.5 // 弹性
    };
    // 增加一点随机性
    x += random(-1, 1);
    super(new Bodies.circle(x, y, r, options));
    this.r = r;
    this.clr = random(360);
  }

  show() {
    fill(this.clr, 255, 255);
    noStroke();
    let { x, y } = this.body.position;
    push();
    translate(x, y);
    ellipse(0, 0, this.r * 2);
    pop();
  }

  isOffScreen() {
    let { x } = this.body.position;
    return x < -50 || x > width + 50;
  }
}

class Plinko extends MyModel {
  constructor(x, y, r) {
    const options = {
      isStatic: true,
      friction: 0.002, // 摩擦
      restitution: 1 // 弹性
    };
    super(new Bodies.circle(x, y, r, options));
    this.r = r;
  }

  show() {
    fill(360);
    noStroke();
    let { x, y } = this.body.position;
    push();
    translate(x, y);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}

class Boundary extends MyModel {
  constructor(x, y, w, h) {
    const options = {
      isStatic: true
    };
    super(new Bodies.rectangle(x, y, w, h, options));
    this.w = w;
    this.h = h;
  }

  show() {
    fill(255);
    let { x, y } = this.body.position;
    push();
    translate(x, y);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

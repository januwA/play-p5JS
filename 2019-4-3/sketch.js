// 使用Matter.js物理引擎和p5.js创建plinko模拟
// video: https://www.youtube.com/watch?v=KakpnfDv_f0&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_&index=6

let Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let particles = [];
let plinkos = [];
let cols = 5;
let rows = 6;

function setup() {
  createCanvas(400, 500);
  engine = Engine.create();
  world = engine.world;
  newParticle();
  let spacing = width / cols;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = spacing / 2 + i * spacing;
      if (j % 2 === 0) {
        x -= spacing / 2;
      }
      let y = spacing + j * spacing;
      plinkos.push(new Plinko(x, y, 3));
    }
  }
}

function newParticle() {
  const p = new Particle(width / 2, 30, 30);
  particles.push(p);
}

function draw() {
  if (frameCount % 60 === 0) {
    newParticle();
  }
  background(100);
  Engine.update(engine);

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.show();
  }
  for (let i = 0; i < plinkos.length; i++) {
    const p = plinkos[i];
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
      friction: 0.002, // 摩擦
      restitution: 1 // 弹性
    };
    super(new Bodies.circle(x, y, r, options));
    this.r = r;
  }

  show() {
    fill(255);
    noStroke();
    let {x, y} = this.body.position;
    push();
    translate(x, y);
    ellipse(0, 0, this.r * 2);
    pop();
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
    fill(0, 255, 0);
    noStroke();
    let {x, y} = this.body.position;
    push();
    translate(x, y);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}

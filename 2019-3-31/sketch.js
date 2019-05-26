// Matter.js是网络的2D物理引擎, http://brm.io/matter-js/
// video: https://www.youtube.com/watch?v=urR596FsU68&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_
// Getting-started: https://github.com/liabru/matter-js/wiki/Getting-started

// module aliases
let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let boxes = []; // 模型
var ground; // 地面

function setup() {
  createCanvas(400, 400);
  // create an engine
  engine = Engine.create();
  world = engine.world;
  // run the engine
  Engine.run(engine);

  ground = Bodies.rectangle(width / 2, height * 0.95, width, 1, { isStatic: true });
  World.add(world, [ground]);
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function draw() {
  background(100);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 1);
}

class Box {
  constructor(x, y, w, h) {
    // Options: http://brm.io/matter-js/docs/classes/Body.html
    let options = {
      friction: -1, // 摩檫力
      frictionAir: 0.2, // 空气阻力
    }
    this.box = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    // add all of the bodies to the world
    World.add(world, [this.box]);
  }

  show() {
    let pos = this.box.position;
    let angle = this.box.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(200)
    stroke(20)
    rect(0, 0, this.w, this.h);
    pop();
  }
}
//Matter.js 多个地形, http://brm.io/matter-js/
// video: https://www.youtube.com/watch?v=uITcoKpbQq4&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_&index=2

// module aliases
let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let boxes = []; // 模型
let rectangles = []; // 地面
let rectanglesAngle = 0;

function setup() {
  createCanvas(400, 700);
  // create an engine
  engine = Engine.create();
  world = engine.world;
  // run the engine
  // Engine.run(engine);

  rectangles[0] = (new Rectangle((width / 2) * 1.2, height * 0.2, width * 0.6, 5, -0.4));
  rectangles[1] = (new Rectangle((width / 2) * 0.5, height * 0.5, width * 0.6, 5, 0.4));
  rectangles[2] = (new Rectangle((width / 2) * 1.3, height * 0.7, width * 0.8, 5, -0.4));
}

// function mouseDragged() {
//   if (random() > 0.5) {
//     boxes.push(new Circle(mouseX, mouseY, random(6, 10)));

//   } else {
//     boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));

//   }
// }

function draw() {
  background(100);
  Engine.update(engine);

  if (random() > 0.5) {
    boxes.push(new Circle(width / 2, -10, random(6, 10)));

  } else {
    boxes.push(new Box(width / 2, -10, random(10, 40), random(10, 40)));
  }

  for (let i = boxes.length - 1; i >= 0; i--) {
    boxes[i].show();
    if (boxes[i].isOffScreen()) {
      boxes[i].removeFromWorld();
      boxes.splice(i, 1);
    }
  }

  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].show();
  }

}



class MyModel {
  constructor(body) {
    this.body = body;
    // add all of the bodies to the world
    World.add(world, [this.body]);
  }
  isOffScreen() {
    return this.body.position.y > height + 100;
  }

  removeFromWorld() {
    World.remove(world, [this.body]);
  }
}

class Box extends MyModel {
  constructor(x, y, w, h) {
    let options = {
      friction: 0.001, // 摩檫力
      // frictionAir: 0.2, // 空气阻力
    }
    super(Bodies.rectangle(x, y, w, h, options));
    // Options: http://brm.io/matter-js/docs/classes/Body.html
    this.w = w;
    this.h = h;
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(120)
    stroke(20)
    rect(0, 0, this.w, this.h);
    pop();
  }
}

class Circle extends MyModel {
  constructor(x, y, r) {
    // Options: http://brm.io/matter-js/docs/classes/Body.html
    let options = {
      friction: 0.001, // 摩檫力
      // frictionAir: 0.2, // 空气阻力
    }
    super(Bodies.circle(x, y, r, options));
    this.r = r;
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill(200)
    stroke(20)
    ellipse(0, 0, this.r * 2)
    pop();
  }


}


class Rectangle extends MyModel {
  constructor(x, y, w, h, a) {
    // Options: http://brm.io/matter-js/docs/classes/Body.html
    let options = {
      friction: 0.001,
      angle: a,
      isStatic: true
    }
    super(Bodies.rectangle(x, y, w, h, options));
    this.w = w;
    this.h = h;
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
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


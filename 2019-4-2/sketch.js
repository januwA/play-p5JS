// 建约束以连接matter.js中的bodies
// video: https://www.youtube.com/watch?v=szztTszPp-8&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_&index=4
// 鼠标约束：https://www.youtube.com/watch?v=W-ou_sVlTWk&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_&index=5

// module aliases
let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;

let engine;
let world;
let boxes = []; // 模型
let rectangles = []; // 地面
let constraint;
let mConstraint;

function setup() {
  const canvas = createCanvas(400, 700);
  engine = Engine.create();
  world = engine.world;

  // 地形
  rectangles[0] = (new Rectangle((width / 2), height * 0.95, width, 50, 0));

  // 创建box约束
  let prevP = null;
  for (let x = width / 2; x < width; x += 15) {
    let isStatic = false;
    if (!prevP) {
      isStatic = true;
    }
    let p = new Circle(x, 10, random(10, 15), isStatic);
    boxes.push(p)

    if (prevP) {
      constraint = Constraint.create({
        bodyA: p.body,
        bodyB: prevP.body,
        length: 50,
        stiffness: 0.4,
      });

      World.add(world, [constraint]);
    }
    prevP = p;
  }

  // 创建鼠标约束
  mConstraint = Matter.MouseConstraint.create(engine, {
    mouse: Mouse.create(canvas.elt)
  });
  mConstraint.mouse.pixelRatio = pixelDensity(); // 设置像素比
  World.add(world, [mConstraint]);
}

function draw() {
  background(100);
  Engine.update(engine);

  for (let i = boxes.length - 1; i >= 0; i--) {
    boxes[i].show();
    if (boxes[i].isOffScreen()) {
      boxes[i].removeFromWorld();
      boxes.splice(i, 1);
    }

    push()
    stroke(200);
    if (i + 1 < boxes.length) {
      line(
        boxes[i].body.position.x,
        boxes[i].body.position.y + (boxes[i].r),
        boxes[i + 1].body.position.x,
        boxes[i + 1].body.position.y
      );
    }
    pop()

  }

  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].show();
  }

  if (mConstraint.body) {
    let pos = mConstraint.body.position;
    let b = mConstraint.constraint.pointB;
    stroke(255, 0, 0);
    line(mouseX, mouseY, pos.x + b.x, pos.y + b.y)
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

class Circle extends MyModel {
  constructor(x, y, r, isStatic) {
    // Options: http://brm.io/matter-js/docs/classes/Body.html
    let options = {
      friction: 0.001, // 摩檫力
      // frictionAir: 0.2, // 空气阻力
      restitution: 1, // 弹力
      isStatic: isStatic
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
    noStroke();
    ellipse(0, 0, this.r * 2)
    pop();
  }


}


class Rectangle extends MyModel {
  constructor(x, y, w, h, a) {
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


let current;
let snowflake = [];

function setup() {
  createCanvas(600, 600);
  current = new Particle(width / 2, 0);
  createButton("reset").mouseClicked(() => {
    console.log("reset");

    current = new Particle(width / 2, 0);
    snowflake = [];
    loop();
  });
}

function draw() {
  translate(width / 2, height / 2);
  rotate(PI / 6);

  background(0);

  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    count++;
  }

  if (count == 0) {
    noLoop();
    console.log("snowflake completed");
  }

  snowflake.push(current);
  current = new Particle(width / 2, 0);

  for (let i = 0; i < 6; i++) {
    rotate(PI / 3);
    current.show();
    for (const s of snowflake) {
      s.show();
    }

    push();
    scale(1, -1);
    current.show();
    for (const s of snowflake) {
      s.show();
    }
    pop();
  }
}

class Particle {
  // constructor(x, y) {
  // this.pos = createVector(x, y);
  constructor(radius, angle) {
    this.pos = p5.Vector.fromAngle(angle);
    this.pos.mult(radius);

    this.r = 3;
  }

  show() {
    fill(255);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  update() {
    this.pos.x -= 1;
    this.pos.y += random(-2, 2);

    // 计算此向量的旋转角度（仅2D向量）
    let angle = this.pos.heading();
    angle = constrain(angle, 0, PI / 6);

    // 计算向量的大小（长度）并以浮点数形式返回结果（这只是方程式sqrt（x * x + y * y + z * z）。）
    let mag = this.pos.mag();

    this.pos = p5.Vector.fromAngle(angle);
    this.pos.setMag(mag);
  }

  // 检测碰撞
  intersects(snowflake) {
    let result = false;
    for (const s of snowflake) {
      const d = dist(s.pos.x, s.pos.y, this.pos.x, this.pos.y);
      if (d < this.r * 2) {
        result = true;
        break;
      }
    }
    return result;
  }

  finished() {
    return this.pos.x < 1;
  }
}

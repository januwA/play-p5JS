const data = [{ num: 12 }, { num: 22 }, { num: 45 }, { num: 3 }, { num: 18 }];

let circleCake;

function setup() {
  createCanvas(400, 400);
  background(255);
  angleMode(DEGREES);

  circleCake = new CircleCake(data, "num", 100);
  circleCake.show();
}

// 饼图
class CircleCake {
  constructor(data, key, r) {
    this.data = data;
    this.key = key;
    this.r = r;
    this.allValue = data.reduce((acc, el) => (acc += el[key]), 0);
  }

  show() {
    push();
    noStroke();
    noFill();
    beginShape();
    translate(width / 2, height / 2);
    for (let a = 0; a < 360; a += 0.1) {
      let x = this.r * sin(a);
      let y = this.r * cos(a);
      vertex(x, y);
    }
    endShape();
    pop();

    let angle = 0;
    let current = 0;
    for (let index = 0; index < this.data.length; index++) {
      const d = this.data[index];
      current += d[this.key];
      let maxAngle = map(current, 1, this.allValue, 1, 360);
      let cake = new Cake(
        width / 2,
        height / 2,
        100,
        angle,
        maxAngle,
        color(random(255), 0, random(255))
      );
      cake.show();
      angle = maxAngle;
    }
  }
}

// 一个饼状
class Cake {
  constructor(x, y, r, angle, maxAngle, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.angle = angle;
    this.maxAngle = maxAngle;
    this.color = color;
  }

  show() {
    push();
    beginShape();
    noStroke();
    fill(this.color);
    translate(this.x, this.y);
    vertex(0, 0);
    for (this.angle; this.angle < this.maxAngle; this.angle += 0.1) {
      let x = this.r * sin(this.angle);
      let y = this.r * cos(this.angle);
      vertex(x, y);
    }
    endShape();
    pop();
  }
}

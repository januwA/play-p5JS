/* 随机游走 */
var w;
var d;

function setup() {
  createCanvas(600, 400);
  w = new Walker();
  d = new Dotted();
  background(0);
}
function draw() {
  w.step();
  w.render();

  d.step();
  d.render();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  step() {
    var choice = floor(random(4));
    if (choice == 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }

    // constrain(n,low,high) 将一个值控制在指定范围
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }
  render() {
    stroke(255);
    point(this.x, this.y);
    // ellipse(this.x, this.y,20)
  }
}

class Dotted {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

    this.stepnum = 22;
  }
  step() {
    var choice = floor(random(4));
    if (choice == 0) {
      this.x += this.stepnum;
    } else if (choice == 1) {
      this.x -= this.stepnum;
    } else if (choice == 2) {
      this.y += this.stepnum;
    } else {
      this.y -= this.stepnum;
    }

    // constrain(n,low,high) 应该是压制在canvas内

    this.x = constrain(this.x, 0, width - this.stepnum);
    this.y = constrain(this.y, 0, height - this.stepnum);
  }
  render() {
    stroke(0, 255, 0);
    point(this.x, this.y);
    // ellipse(this.x, this.y,20)
  }
}

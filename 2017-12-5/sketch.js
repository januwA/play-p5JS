var obj;

var obj2 = [];
var i = 0;

var odate = 0;
function myPush(i) {
  // 用于定时创建
  var od = Date.now();
  if (od - odate > 500) {
    obj2.push(new Obj2({ x: i }));
    odate = od;
  }
}

function setup() {
  createCanvas(600, 400);
  obj = new Obj();
}

function draw() {
  background(0);
  myPush(i); // 一只调用添加 obj方法

  fill(255);
  noStroke();
  for (let i = obj2.length - 1; i > 0; i--) {
    obj2[i].show();
    obj2[i].update();
    if (obj2[i].remove()) {
      obj2.splice(i, 1);
    }
  }
}

class Obj {
  constructor(props) {}
  show(x) {
    if (x > width) {
      return false;
    }
    fill(x, 100, x);
    stroke(100, x, 0);
    strokeWeight(4);
    ellipse(x, 100, 30);
    return this.show(x + 50);
  }
}

class Obj2 {
  constructor(props) {
    this.x = props.x * -70;
  }
  update() {
    this.x += 3;
  }
  remove() {
    return this.x > width + 50; // 600 canvas宽度
  }
  show() {
    fill(this.x, 100, this.x);
    stroke(100, this.x, 0);
    strokeWeight(4);
    ellipse(this.x, 300, 30);
  }
}

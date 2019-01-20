var balls = [];
var sd = 10; // 标准差, 越小越接近平均值， 否者反之；
var meanX = 200;
var meanY = 100;

function mousePressed() {
  // 按下
  sd = 10;
}
function mouseReleased() {
  // 释放
  sd = 30;
}
function setup() {
  createCanvas(400, 200);

  frameRate(13); // 1s 13帧

  for (let i = 0; i < 100; i++) {
    balls.push(new ball());
  }
}

function draw() {
  background(0);
  for (let i = balls.length - 1; i >= 0; i--) {
    balls[i].run();
  }
  //noLoop();
}

class ball {
  constructor() {}

  run() {
    this.show();
  }

  show() {
    fill(random(255), random(255), random(255));
    noStroke();
    // 返回高斯随机数
    var numX = randomGaussian();
    var numY = randomGaussian();

    var x = sd * numX + meanX;
    var y = sd * numY + meanY;

    ellipse(x, y, random(10, 20));
  }
}

/**
 * * lerp(start, stop, amt)
 * 计算一个介于两个数字之间所定义的插值量位置的数字。
 * amt 参数为两个值之间的插值量，0.0 为第一个值，0.1 为非常接近第一个值，0.5 为两者之间等等。lerp 函数可用来沿着直线制作动画及绘制虚线。
 * https://www.youtube.com/watch?v=8uLVnM36XUc&t=331s
 */

const balls = [];

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 20; i++) {
    const col = color(random(0, 255), random(0, 255), random(0, 255));
    balls.push(new Ball(col));
  }
}

function draw() {
  background(200);
  let x = mouseX + random(-10, 10);
  let y = mouseY + random(-10, 10);

  noStroke();

  fill("red");
  ellipse(x, y, 40);

  for (let ball of balls) {
    ball.show();
    ball.update();
  }
}

class Ball {
  constructor(col) {
    const [x, y] = [0, 0];
    Object.assign(this, {
      col,
      x,
      y
    });
  }

  show() {
    fill(this.col);
    ellipse(this.x, this.y, 40);
  }

  update() {
    this.x = lerp(this.x, mouseX, 0.06) + random(-20, 20);
    this.y = lerp(this.y, mouseY, 0.06) + random(-20, 20);
  }
}

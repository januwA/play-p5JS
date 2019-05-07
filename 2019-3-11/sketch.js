// 使用三角函数和perlin噪声来程序生成p5.js的蝶形翼设计
// video: https://www.youtube.com/watch?v=O_0fRV4MTZo&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=10

let da = 0.03;
let slider_dx;
let yoff = 0;

function setup() {
  createCanvas(200, 200);

  slider_dx = createSlider(0, 5, 0.1, 0.01);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(PI / 2);

  stroke(255);
  fill(200, 100);
  beginShape();
  let xoff = 0;
  for (let angle = -PI / 2; angle < PI / 2; angle += da) {
    let n = noise(xoff, yoff);
    let r = sin(2 * angle) * map(n, 0, 1, 50, 120);
    let x = r * cos(angle); // 临边x
    let y = r * sin(angle); // 对边y
    xoff += slider_dx.value();
    vertex(x, y);
  }

  for (let angle = PI / 2; angle < (3 * PI) / 2; angle += da) {
    let n = noise(xoff, yoff);
    let r = sin(2 * angle) * map(n, 0, 1, 50, 120);
    let x = r * cos(angle); // 临边x
    let y = r * sin(angle); // 对边y
    xoff -= slider_dx.value();
    vertex(x, y);
  }
  endShape(CLOSE);

  yoff += 0.1;
}

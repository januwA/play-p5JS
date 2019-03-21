function setup() {
  createCanvas(600, 400);

  // 默认为 RADIANS
  angleMode(DEGREES);
}

function draw() {
  background(0);

  let x = 100;
  let y = 100;

  stroke(255);
  strokeWeight(4);
  point(x, y);

  // 角度
  // let angle = 45;
  let angle = map(mouseX, 0, width, -90, 90);

  // r，斜边长度
  let r = 100;
  // let r = mouseX;

  // 邻边 = 斜边 * cos(angle)
  let dx = r * cos(angle);
  line(x, y, x + dx, y);

  // 对边 = 斜边 * sin(angle)
  let dy = r * sin(angle);
  line(x + dx, y, x + dx, y + dy);

  point(x + dx, y + dy);

  line(x, y, x + dx, y + dy);
}

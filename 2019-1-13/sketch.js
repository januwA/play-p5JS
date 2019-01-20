// 随机分布粒子，不发生碰撞
let circles = [];
const padding = 0.1;
let protection = 0;

function setup() {
  createCanvas(600, 400);
  background(200);

  while (circles.length < 10000) {
    // for (let i = 0; i < 30; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      r: random(10, 30),
    };

    let overlapping = false;
    for (let j = 0; j < circles.length; j++) {
      const other = circles[j];
      const d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r + padding) {
        overlapping = true;
      }
    }

    if (!overlapping) {
      circles.push(circle);
    }

    protection++;

    if (protection > 5000) {
      break;
    }
  }

  showAll();
}

function draw() {}

function showAll() {
  for (let i = 0; i < circles.length; i++) {
    const { x, y, r } = circles[i];

    noStroke();
    fill(255, 0, 200, 120);
    ellipse(x, y, r * 2, r * 2);
  }
}

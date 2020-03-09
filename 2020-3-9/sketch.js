let heart = [];
let a = 0;
let r = 10;
let n = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  noFill();
  strokeWeight(4)
  beginShape();
  for (const v of heart) {
    vertex(v.x, v.y);
  }
  endShape();
  let x = r * 16 * sin(a) ** 3;
  let y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
  heart.push({ x, y });
  a += 0.05;
  if (a >= TWO_PI * n) {
    console.log("one heart end");
    stroke(random(255), random(255), random(255));
    r -= 2;
    n++;

    if (r < -10) {
      noLoop();
    }
  }
}

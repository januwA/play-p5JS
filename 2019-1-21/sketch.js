//https://www.youtube.com/watch?v=BxabnKrOjT0
// https://www.youtube.com/watch?v=2F6zliBTd-w&t=830s

let vertices = [];
const r = 8;
const verticesLength = 20;

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < verticesLength; i++) {
    let v = createVector(random(width), random(height));
    vertices.push(v);
  }
}

function draw() {
  background(0);

  let reached = [];
  let unreached = [];

  unreached = vertices.slice();
  // for (let i = 0; i < vertices.length; i++) {
  //   unreached.push(vertices[i]);
  // }

  reached.push(unreached[0]);
  unreached.splice(0, 1);

  while (unreached.length > 0) {
    let record = 100000;
    let rIndex, uIndex;

    for (let i = 0; i < reached.length; i++) {
      for (let j = 0; j < unreached.length; j++) {
        let v1 = reached[i];
        let v2 = unreached[j];
        let d = dist(v1.x, v1.y, v2.x, v2.y);
        if (d < record) {
          record = d;
          rIndex = i;
          uIndex = j;
        }
      }
    }

    stroke(255);
    strokeWeight(2);
    line(
      reached[rIndex].x,
      reached[rIndex].y,
      unreached[uIndex].x,
      unreached[uIndex].y,
    );
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex, 1);
  }

  for (let i = 0; i < vertices.length; i++) {
    const v = vertices[i];
    noStroke();
    fill(255);
    ellipse(v.x, v.y, r * 2, r * 2);

    let newX = v.x + random(-5, 5);
    let newY = v.y + random(-5, 5);

    // constrain 避免溢出屏幕外
    v.x = constrain(newX, 0, width);
    v.y = constrain(newY, 0, height);
  }
}

// 噪音使用
// Video: https://www.youtube.com/watch?v=y7sgcFhk6ZM&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=3

let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  let yoff = start;
  stroke(255);
  noFill();
  beginShape();
  for (let x = 0; x < width; x++) {
    // let y = random(height);
    // let y = noise(yoff) * height;
    let y = height / 2 + sin(yoff) * height / 2
    vertex(x, y);
    yoff += inc;
  }
  endShape();
  start += inc;
}

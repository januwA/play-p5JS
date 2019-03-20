// p5.js覆盖矩阵“转换”
// Video: https://www.youtube.com/watch?v=o9sgjuh-CBM&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H

let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  push();
  translate(mouseX, mouseY)
  rotate(angle)
  fill(255);
  rectMode(CENTER);
  rect(0, 0, 100, 50);
  pop();


  translate(100, 100);
  rotate(-angle * 2);
  rectMode(CENTER);
  rect(0, 0, 100, 20);

  angle += 0.5;
}
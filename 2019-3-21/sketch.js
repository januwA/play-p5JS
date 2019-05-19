// 3D几何和原始形状
// video: https://www.youtube.com/watch?v=6TPVoB4uQCU&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=2


let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(100);

  fill(200, 200, 0);
  strokeWeight(6)
  translate(0, 0, mouseX)
  rotateX(angle)
  rotateY(angle * 0.3)
  rotateZ(angle * 0.5);
  box(100, 50, 10);

  angle += 0.05;
}
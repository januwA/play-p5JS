// 使用createGraphics()创建的图形上下文作为纹理应用于3D几何体
// video: https://www.youtube.com/watch?v=3tTZlTq4Cxs&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=6


let angle = 0;
let graphics;

function setup() {
  createCanvas(400, 400, WEBGL);
  graphics = createGraphics(200, 200);
  graphics.background(255);
}

function draw() {
  background(255);
  graphics.fill(random(frameRate(), 255), random(frameRate(), 255), random(frameRate(), 255));
  graphics.textAlign(CENTER);
  graphics.textSize(44);
  graphics.text('Ajanuw', graphics.width / 2, graphics.height / 2);
  // graphics.ellipse(
  //   map(mouseX, 0, width, 0, graphics.width),
  //   map(mouseY, 0, height, 0, graphics.height),
  //   20,
  // );

  noStroke();
  rotateX(angle);
  rotateY(angle * 1.1);
  rotateZ(angle * 1.3);

  texture(graphics);
  plane(200, 200);
  // box(200)

  angle += 0.02;
}
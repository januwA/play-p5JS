// 光源
// video: https://www.youtube.com/watch?v=k2FguXvqp60&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=3


let angle = 0;

function setup() {
  createCanvas(200, 200, WEBGL);
  colorMode(RGB);
}

function draw() {
  background(0);
  pointLight(0, 250, 0, -100, 0, 100) // 左边绿灯
  pointLight(0, 0, 255, 100, 0, 100) // 右边蓝灯
  directionalLight(0, 255, 0, 0, 1, 0.5); // 使用所定义的颜色及方向创造一个定向光。

  // fill(200, 200, 0);
  // normalMaterial()
  // strokeWeight(6)

  ambientLight(200, 100, 100); // 使用所定义的颜色创造一个环境光
  ambientMaterial(255); // 使用所给予颜色定义形状的环境材料

  rotateX(angle)
  rotateY(angle * 0.06)
  rotateZ(angle * 0.06);
  noStroke()
  box(100, 50, 10);
  sphere(40);

  angle += 0.05;
}
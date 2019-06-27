// 使用p5.3D.js在WebGL中创建三维文字和图像。由Freddie Rawlins创建
// https://github.com/FreddieRa/p5.3D

let wordObject;
let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);

  wordObject = createWord3D("Ajanuw", 3, 4, 20);
}

function draw() {
  background(255);
  noStroke();
  // fill(255, 0, 0);
  normalMaterial();

  rotateX(angle);
  rotateY(angle * 1.1);
  rotateZ(angle * 1.2);

  wordObject.show();

  angle += 0.02;
}

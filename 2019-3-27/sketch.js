// 使用beginShape()，endShape()和vertex()在p5.js/WebGL中创建自定义形状
// videl: https://www.youtube.com/watch?v=DZlw-IS5OkI&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=8

let img;
let angle = 0;

function preload() {
  img = loadImage('https://i.loli.net/2019/05/23/5ce641d87470e96904.jpg')
}

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  background(0)

  ambientLight(255)
  rotateX(angle)
  rotateY(angle * 1.1)
  rotateZ(angle * 1.2)

  translate(-50, -50, 0)
  texture(img)
  beginShape()
  vertex(0, 0, 0, 0, 0)
  vertex(100, 0, 0, 1, 0)
  vertex(100, 100, 0, map(mouseX, 0, width, 1, 0), map(mouseX, 0, height, 1, 0))
  vertex(0, 100, 0, 0, 1)
  endShape(CLOSE)

  // angle += 0.03;
}
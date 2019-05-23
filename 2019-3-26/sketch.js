// 在WebGL中加载OBJ model, p5.js 回退到0.6.0版本
// video: https://www.youtube.com/watch?v=FUI7HEEz9B0&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=7
// Free OBJ Models: https://www.turbosquid.com/Search/3D-Models/free/obj
// Free3D: https://free3d.com/3d-models/obj?page=1

let angle = 0;
let obj;
let img;

function preload() {
  obj = loadModel('./Toilet.obj')
  img = loadImage('https://i.loli.net/2019/05/23/5ce641d87470e96904.jpg')
}

function setup() {
  createCanvas(400, 400, WEBGL)
}

function draw() {
  background(100)
  noStroke()
  camera(0, 0, (height / 2.0) / tan(PI * 60.0 / 180.0), 0, 0, 0, 0, 1, 0);

  rotateX(angle);
  rotateY(angle * 1.1);
  rotateZ(angle * 1.3);

  // normalMaterial()
  texture(img);
  model(obj)
  angle += 0.02;
}
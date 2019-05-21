// 在3D中覆盖纹理
// video: https://www.youtube.com/watch?v=O1mYw-3Wl_Q&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=4


let img;
let select;
var checkbox;
let video;
let angle = 0;
let shapes3D = 'box  plane sphere cylinder cone ellipsoid torus'.trim().split(/\s+/);

function preload() {
  img = loadImage('https://i.loli.net/2019/05/21/5ce368901c6bb62228.jpg');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  video = createCapture(VIDEO);
  video.hide();

  createElement('br', '');
  select = createSelect();
  for (const s of shapes3D) {
    select.option(s);
  }

  createElement('br', '');
  checkbox = createCheckbox('相机?', false);
}

function draw() {
  background(120);

  noStroke()
  push()
  // ambientLight(255); // 使用所定义的颜色创造一个环境光
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(-dx, -dy, 0);
  v.div(50);
  directionalLight(255, 255, 255, v);
  ambientMaterial(255); // 使用所给予颜色定义形状的环境材料

  rotateX(angle)
  rotateY(angle * 0.04)
  rotateZ(angle * 0.02);

  checkbox.checked() ? texture(video) : texture(img);
  switch (select.value()) {
    case 'plane': plane(100, 100);
      break;
    case 'box': box(80);
      break;
    case 'sphere': sphere(50);
      break;
    case 'cylinder': cylinder(20, 50);
      break;
    case 'cone': cone(20, 50);
      break;
    case 'ellipsoid': ellipsoid(30, 40, 40);
      break;
    case 'torus': torus(60, 10);
      break;
  }
  pop()

  translate(0, 180);
  rotateX(HALF_PI);
  ambientMaterial(255);
  plane(width, width);


  angle += 0.03;
}
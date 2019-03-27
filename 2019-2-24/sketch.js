// 通过将像素读取到围绕HTML5画布移动的颜色形状，从实时视频源制作绘画
// Video: https://www.youtube.com/watch?v=0V3uYA1hafk&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=6
// p5.js 需要0.7.1

let video;
let vScale = 16;
let particles = [];
let slider;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  // video.hide();

  for (let index = 0; index < 200; index++) {
    particles.push(new Particle(random(width), random(height)));
  }
  background(50);

  slider = createSlider(0, 255, 255);
}

function draw() {
  video.loadPixels();

  for (let particle of particles) {
    particle.update();
    particle.show();
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(8, 10);
  }

  show() {
    // 保持画布与视频的比例
    let [px, py] = [floor(this.x / vScale), floor(this.y / vScale)];
    let col = video.get(px, py);
    fill(col[0], col[1], col[2], slider.value());
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }

  update() {
    this.x += random(5, -5);
    this.y += random(5, -5);

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
}

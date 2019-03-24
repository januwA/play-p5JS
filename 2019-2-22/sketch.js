// 根据实时视频源中像素的亮度值在p5.js画布中创建抽象镜像
// Video: https://www.youtube.com/watch?v=rNqaw8LT2ZU&index=4&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig
// p5.js 需要0.7.1

let video;
let vScale = 16;
function setup() {
  createCanvas(640, 480);

  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  // video.hide();
}

function draw() {
  background(50);

  video.loadPixels();
  loadPixels();
  for (let x = 0; x < video.width; x++) {
    for (let y = 0; y < video.height; y++) {
      // let index = (x + y * video.width) * 4;
      let index = (video.width - x + 1 + y * video.width) * 4; // 让镜头正反正确
      let [r, g, b] = [
        video.pixels[index + 0],
        video.pixels[index + 1],
        video.pixels[index + 2],
      ];
      let bright = (r + b + g) / 3; // 取3种颜色的平均值
      // pixels[index + 0] = bright;
      // pixels[index + 1] = bright;
      // pixels[index + 2] = bright;
      // pixels[index + 3] = 255;

      let w = map(bright, 0, 255, 0, vScale);
      noStroke();
      fill(bright);
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w, w);
    }
  }
  // updatePixels();
}

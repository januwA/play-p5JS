// 从实时视频中读取像素并更改DOM元素（复选框）以创建抽象镜像
// Video: https://www.youtube.com/watch?v=m1G6WBvrOBE&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=5
// p5.js 需要0.7.1

let video;
let vScale = 16;
let slider;

let cols = 40;
let rows = 30;
let boxes = [];

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(cols, rows);
  video.hide();

  slider = createSlider(0, 155, 120, 1); // createSlider(min, max, [value], [step])

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      let c = createInlineCheckbox();
      c.parent("mirror");
      boxes.push(c);
    }
    createSpan("<br />").parent("mirror");
  }
}

function draw() {
  background(50);

  video.loadPixels();
  loadPixels();
  for (let x = 0; x < video.width; x++) {
    for (let y = 0; y < video.height; y++) {
      let index = (video.width - x + 1 + y * video.width) * 4; // 让镜头正反正确
      let checkIndex = x + y * cols;
      let [r, g, b] = [
        video.pixels[index + 0],
        video.pixels[index + 1],
        video.pixels[index + 2],
      ];
      let bright = (r + b + g) / 3; // 取3种颜色的平均值
      let threshold = slider.value(); // 阈值
      if (bright > threshold) {
        fill(255);
        boxes[checkIndex].checked(false);
      } else {
        fill(0);
        boxes[checkIndex].checked(true);
      }
      let w = map(bright, 0, 255, 0, vScale);
      noStroke();
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w, w);
    }
  }
}

function createInlineCheckbox() {
  const c = createCheckbox();
  c.style("display", "inline");
  return c;
}

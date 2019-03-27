// 将serious.js与p5.js结合使用，以便在浏览器中实时处理视频
// Video: https://www.youtube.com/watch?v=jdKep6jo7b0&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=8

let video;
let slider;

function setup() {
  createCanvas(600, 400, WEBGL).id("p5Canvas");
  background(50);
  pixelDensity(1);
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.id("blur-slider");

  video = createCapture(VIDEO);
  video.size(width, height);
  video.id("p5Video");
  video.hide();

  let seriously = new Seriously();
  let src = seriously.source("#p5Video");
  let target = seriously.target("#p5Canvas");

  let blur = seriously.effect("blur");
  blur.amount = "#blur-slider";
  blur.source = src;
  target.source = blur;
  seriously.go();
}

function draw() {}

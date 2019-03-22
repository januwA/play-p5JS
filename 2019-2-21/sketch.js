// 在p5.js草图中整合来自摄像头的实时视频
// Video: https://www.youtube.com/watch?v=bkGf4fEHKak&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig

let video;
function setup() {
  createCanvas(600, 400);
  background(0);
  video = createCapture(VIDEO);
  video.size(600, 400);
  video.hide();
}

function draw() {
  tint(255, 0, 255)
  image(video, 0, 0);
}

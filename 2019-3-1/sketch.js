// Video: https://www.youtube.com/watch?v=YqVbuMPIRwY&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=7
// p5.js 需要0.7.1

let video;
let x = 0;

function setup() {
  createCanvas(800, 240);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(320, 240);

  background(50);
}

function draw() {
  video.loadPixels();
  let w = video.width;
  let h = video.height;
  copy(video, w / 2, 0, 1, h, x, 0, 1, height);
  
  x++;
  if(x > width){
    x = 0;
  }
}

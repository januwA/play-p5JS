// Video: https://www.youtube.com/watch?v=OIfEHD3KqCg&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=17


let canvas;

// 改变大小的时候
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(10, 100)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0)
  background(10, 100)

}

function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY)
  }
}

function keyPressed() {
  clear();
}
// 使用系统麦克风作为草图的输入，控制音量元素
// video: https://www.youtube.com/watch?v=q2IDNkUws-A&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=8

let mic;

function setup() {
  createCanvas(200, 200);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  let vol = mic.getLevel();
  ellipse(width / 2, height / 2, 200, vol * 200);
}
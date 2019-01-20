var x = 0;
var y = 0;
var oldy = 0;
var he = true;

var t = 0;

function setup() {
  createCanvas(400, 200);
  background(0);

  // noiseDetail(lob,falloff)
  noiseDetail(0.01, 5);
}

function draw() {
  stroke(255);
  var ty = noise(t);
  ty = map(ty, 0, 1, 0, 200);

  if (he) {
    line(x, y, x++, ty);
    y = ty;
    he = !he;
  } else {
    he = !he;
  }

  // 跨越越大， 得到的随机数越随机
  t += 0.02;
  if (x > width) {
    background(0);
    x = 0;
  }
}

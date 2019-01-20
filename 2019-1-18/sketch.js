var x = 0;
var y = 0;
var oldy = 0;
var he = true;

function setup() {
  createCanvas(400, 200);
  background(0);
}

function draw() {
  stroke(255);
  var r = random(200);
  if (he) {
    line(x, y, x++, r);
    y = r;
    he = !he;
  } else {
    he = !he;
  }
  if (x > width) {
    background(0);
    x = 0;
  }
}

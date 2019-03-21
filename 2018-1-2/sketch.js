var itemWidth = 20; // 每个 rect的width
var rs = []; // rects

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < width / itemWidth; i++) {
    rs.push(new RectInit(i));
  }
}
function draw() {
  background(0);

  for (let i = 0; i < rs.length; i++) {
    rs[i].update();
    rs[i].show();
  }
  var index = floor(random(0, rs.length));
  rs[index].move();
}

class RectInit {
  constructor(x) {
    this.count = 1;
    this.w = itemWidth;
    this.h = random(0, 10);

    this.x = this.w * x;
    this.y = height;
  }
  show() {
    var mapColor = map(this.h, 0, height, 0, 255);

    fill(mapColor, 255, 0);
    rect(this.x, this.y - this.h, this.w, this.h);

    fill(255, 0, 0);
    text(this.count, this.x + 10, this.h);
  }
  move() {
    this.h += 4;
  }
  update() {
    if (this.h > height) {
      this.count++;
      this.h = random(0, 10);
    }
  }
}

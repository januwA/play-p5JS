// 如何将一个圆圈（或任何你想要的形状）变成一个blob并让边缘具有流畅/斑点/摇摆的外观。 使用了使用beginShape（）和endShape（）以及perlin噪声的技术。
// video: https://www.youtube.com/watch?v=rX5p-QRP6R4&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=9

let blob;
let blobs = [];
let zoom = 1;
let yoff = 0;

function setup() {
  createCanvas(400, 400);
  blob = new Blob(0, 0, 50);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  let newzoom = 128 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);

  blob.show();
}

class Blob {
  constructor(x, y, r) {
    this.r = r;
  }

  show() {
    fill(255, 255, 0);
    noStroke();
    // ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    push();
    beginShape();
    let xoff = 0;
    for (let a = 0; a < TWO_PI; a += 0.001) {
      // let r = this.r + random(-50, 50);
      let offset = map(noise(xoff, yoff), 0, 1, -25, 25);
      let r = this.r + offset;
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
      // ellipse(x, y, 3, 3)

      xoff += 0.1;
    }
    endShape();
    pop();
    yoff += 0.01;
  }
}

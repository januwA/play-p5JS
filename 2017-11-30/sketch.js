var pros = [];

function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(0);
  var pro = new Pro();
  pros.push(pro);

  for (let i = pros.length - 1; i > 0; i--) {
    pros[i].update();
    pros[i].show();
    if (pros[i].remove()) {
      pros.splice(i, 1);
    }
  }
}

class Pro {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(50, 255);
    this.g = random(50, 255);
    this.b = random(50, 255);

    this.alpha = random(120, 200);
  }

  remove() {
    return this.alpha < 0;
  }
  update() {
    this.alpha -= 0.6;
  }
  show() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    ellipse(this.x, this.y, 10);
  }
}

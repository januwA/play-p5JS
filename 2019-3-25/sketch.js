const sketch_1_ctx = p => {
  p.angle = 0;
  p.graphics = null;

  p.setup = () => {
    let canvas = p.createCanvas(200, 200, p.WEBGL);
    canvas.style('position', 'fixed');
    canvas.style('right', '0');
    canvas.style('top', '0');
    p.graphics = p.createGraphics(200, 200);
    p.graphics.background(255);
  }

  p.draw = () => {
    p.background(255);
    p.graphics.fill(p.random(p.frameRate(), 255), p.random(p.frameRate(), 255), p.random(p.frameRate(), 255));
    p.graphics.textAlign(p.CENTER);
    p.graphics.textSize(44);
    p.graphics.text('Ajanuw', p.graphics.width / 2, p.graphics.height / 2);

    p.noStroke();
    p.rotateX(p.angle);
    p.rotateY(p.angle * 1.1);
    p.rotateZ(p.angle * 1.3);

    p.texture(p.graphics);
    p.plane(200, 200);
    // box(200)

    p.angle += 0.02;
  }
};

const sketch_2_ctx = p => {
  p.circles = []
  p.img;
  p.spots = []
  p.imgPath = 'https://i.loli.net/2018/09/05/5b8fce8bbe8b5.jpg'

  p.preload = () => {
    p.img = p.loadImage(p.imgPath)
  }

  p.setup = () => {
    let canvas = p.createCanvas(600, 400)
    canvas.style('position', 'fixed');
    canvas.style('left', '0');
    canvas.style('top', '0');
    p.pixelDensity(1);
    p.img.loadPixels();

    for (let x = 0; x < p.img.width; x++) {
      for (let y = 0; y < p.img.height; y++) {
        let index = (x + y * p.img.width) * 4;
        let c = p.img.pixels[index];
        let b = p.brightness(p.color(c))
        if (b > 10) {
          p.spots.push(p.createVector(x, y))
        }
      }
    }
  }

  p.draw = () => {
    p.background('rgba(0,0,0, 0)');

    for (let i = 0; i < 5; i++) {
      let newC = newCircle()
      if (newC !== null) {
        p.circles.push(newC)
      }
    }

    for (let c of p.circles) {
      if (c.growing) {
        if (c.edges()) {
          c.growing = false;
        } else {
          for (let other of p.circles) {
            if (c === other) continue;
            let d = p.dist(c.x, c.y, other.x, other.y)
            if (d - 2 < c.r + other.r) {
              c.growing = false;
              break;
            }
          }
        }
      }
      c.run();
    }

    if (p.circles.length > 800) {
      p.noLoop();
    }
  }


  function newCircle() {
    let r = p.int(p.random(0, p.spots.length))
    let spot = p.spots[r]
    let x = spot.x
    let y = spot.y

    let valid = true;
    for (let c of p.circles) {
      let d = p.dist(x, y, c.x, c.y)
      if (d < c.r) {
        valid = false;
        break;
      }
    }

    if (valid) {
      let strokeC = p.color(p.random(255), p.random(255), p.random(255))
      return new Circle(x, y, 1, strokeC)
    } else {
      return null
    }
  }

  class Circle {
    constructor(x, y, r, strokeColor = 255) {
      this.x = x
      this.y = y
      this.r = r
      this.strokeColor = strokeColor

      this.growing = true;
    }

    run() {
      this.grow()
      this.show()
    }

    show() {
      p.noFill()
      p.strokeWeight(2)
      p.stroke(this.strokeColor)
      p.ellipse(this.x, this.y, this.r * 2)
    }

    grow() {
      if (this.growing) {
        this.r += 0.5;
      }
    }

    edges() {
      // this.r > 12 是后面填上去的
      return (this.x + this.r > p.width || this.x - this.r < 0 || this.y + this.r > p.height || this.y - this.r < 0 || this.r > 12);
    }
  }
}

window.addEventListener('load', () => {
  const p51 = new p5(sketch_1_ctx);
  const p52 = new p5(sketch_2_ctx);
});
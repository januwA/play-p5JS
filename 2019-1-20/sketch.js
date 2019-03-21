// 创建作用于，避免变量和其他库冲突
// https://www.youtube.com/watch?v=N9ZK_rpr3tY

const sketch_1 = p => {
  p.x = 100;
  p.y = 100;

  p.setup = () => {
    p.createCanvas(200, 200);
    p.background(0);
  };

  p.draw = () => {
    p.noStroke()
    p.fill(255, 50)
    p.ellipse(p.x, p.y, 20);

    p.x += p.random(-5, 5)
    p.y += p.random(-5, 5)
  };
};

const sketch_2 = p => {
  p.x = 100;
  p.y = 100;

  p.setup = () => {
    p.createCanvas(200, 200);
    p.background(0);
  };

  p.draw = () => {
    p.noStroke()
    p.fill(255, 0, 0, 50)
    p.ellipse(p.x, p.y, 20);

    p.x += p.random(-5, 5)
    p.y += p.random(-5, 5)
  };
};

const p5_1 = new p5(sketch_1);
const p5_2 = new p5(sketch_2);

setInterval(() => {
  p5_2.background(0)
  p5_2.x = 100
  p5_2.y = 100
}, 3000)

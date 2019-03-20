// createGraphics() 创建并返回一个新的p5.Renderer对象
// Video: https://www.youtube.com/watch?v=TaluaAD9MKA&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=12
// Docs: https://p5js.org/reference/#/p5/createGraphics

let x, y;
let pg; // createGraphics()
let pg2;

function setup() {
  createCanvas(600, 400);
  x = width / 2;
  y = height / 2;

  pg = createGraphics(width, height);
  pg2 = createGraphics(width, height);
}

function draw() {
  background(0);

  image(pg, 0, 0);
  image(pg2, 0, 0);
  
  myDrawEllipse();
  
  pg2.fill(255, 0, 0, 150);
  pg2.noStroke();
  pg2.rect(random(width), random(height), 5, 5);

  if (mouseIsPressed) {
    pg.fill(255, 200);
    pg.noStroke();
    pg.ellipse(mouseX, mouseY, 40, 40);
  }
}

function myDrawEllipse() {
  fill(255, 255, 0);
  noStroke();
  ellipse(x, y, 20, 20);
  x += random(3, -3);
  y += random(3, -3);
}

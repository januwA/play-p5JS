// Video: https://www.youtube.com/watch?v=76fiD5DvzeQ&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=22

// 所有形状都是通过连接一系列顶点构成的。 vertex（）用于指定点，线，三角形，四边形和多边形的顶点坐标。 它仅在beginShape（）和endShape（）函数中使用。

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
}

function draw() {
  // demo1();
  // demo2();
  demo3();
}

function demo1() {
  background(0);
  let x = mouseX;
  let y = mouseY;
  let lineWidth = 50;
  stroke(255);
  strokeWeight(4);
  noFill();
  beginShape();
  vertex(x, y);
  vertex(x + lineWidth, y - 20);
  vertex(x + lineWidth + 20, y - lineWidth - 20);
  vertex(x + lineWidth + 20 + 20, y - 20);
  vertex(x + lineWidth + 20 + 20 + lineWidth, y);
  endShape(CLOSE); // 可以传入close闭合点
}

function demo2() {
  background(0);
  stroke(255);
  noFill();
  strokeWeight(3);
  beginShape();
  let r = 100;
  let spacing = map(mouseX, 0, width, 10, 100);
  let maxA = map(mouseY, 0, height, 1, 360);
  for (let a = 0; a < maxA; a += spacing) {
    let x = r * sin(a) + 200;
    let y = r * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function demo3() {
  background(0);

  strokeWeight(6);
  point(mouseX, mouseY);

  point(200, 100);
  point(200 + 100, 100);

  point(300, 200);
  // point(mouseX, mouseY);

  stroke(255);
  noFill();
  strokeWeight(2);
  beginShape();
  // vertex(100, 200);
  // vertex(200, 50);
  // vertex(300, 200);
  curveVertex(mouseX, mouseY);
  curveVertex(mouseX, mouseY);

  curveVertex(200, 100);
  curveVertex(200 + 100, 100);

  curveVertex(300, 200);
  // curveVertex(mouseX, mouseY);
  // curveVertex(mouseX, mouseY);
  endShape(CLOSE);
}
let loc;
let speed;

function setup() {
  createCanvas(600, 400)

  const x = width / 2;
  const y = height / 2;
  loc = createVector(x, y);

  speed = createVector(3, 4);

}

function draw() {
  background(0)
  noFill();
  stroke(255);
  strokeWeight(3);
  ellipse(loc.x, loc.y, 20, 20)

  if (loc.x > width || loc.x < 0) {
    speed.x *= -1;
    // speed.mult(-1);
  }
  if (loc.y > height || loc.y < 0) {
    speed.y *= -1;
    // speed.mult(-1);
  }


  loc.add(speed.x, 0);
  loc.add(0, speed.y);
}
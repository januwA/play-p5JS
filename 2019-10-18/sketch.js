let n = 0;
let d = 0;

let dSlider;
let nSlider;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  // dSlider = createSlider(0, 180, 1, 1);
  // nSlider = createSlider(0, 180, 1, 1);
}

function draw() {
  background(0);
  // d = dSlider.value();
  // n = nSlider.value();

  translate(width / 2, height / 2);
  beginShape();
  noFill();
  strokeWeight(1);
  stroke(255);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 200 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();

  beginShape();
  noFill();
  stroke(200, 0, 100, 200);
  strokeWeight(2);
  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = 200 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();

  n += 0.01;
  d += 0.01;
}

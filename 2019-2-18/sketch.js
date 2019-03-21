let rows = 10;
let cols = 10;
let colors = [];

function setup() {
  createCanvas(300, 300);

  // for (let i = 0; i < rows; i++) {
  //   colors[i] = [];
  //   for (let j = 0; j < cols; j++) {
  //     colors[i][j] = random(255);
  //   }
  // }
  colors = make2Darray(rows, cols);
}

function make2Darray(rows, cols) {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
      arr[i][j] = color(random(255));
    }
  }
  return arr;
}

function draw() {
  background(0);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = i * 30;
      let y = j * 30;
      stroke(0);
      fill(colors[i][j]);
      rect(x, y, 30, 30);
    }
  }
}

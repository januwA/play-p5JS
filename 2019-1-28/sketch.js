// array pixels: https://www.youtube.com/watch?v=nMUMZ5YRxHI

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  background(0);
}

function draw() {
  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      pixels[index + 0] = random(255); // r
      pixels[index + 1] = random(x); // g
      pixels[index + 2] = random(y); // b
      pixels[index + 3] = random(255); // a
    }
  }
  updatePixels();
}

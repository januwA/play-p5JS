// 二维Perlin噪声
// Video: https://www.youtube.com/watch?v=ikwNrFvnL3g&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=4

let inc = 0.001;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  let yoff = 0;
  for (let x = 0; x < width; x++) {
    let xoff = 0;
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      // let r = random(255)
      let r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();

  inc += 0.001;
}

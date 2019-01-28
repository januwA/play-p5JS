let img;
let max = 10;

function preload() {
  img = loadImage('https://i.loli.net/2019/01/13/5c3ac84832d73.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
  background(0);
}

function draw() {
  img.loadPixels();
  for (let x = 0; x < width; x += max) {
    for (let y = 0; y < height; y += max) {
      let index = (x + y * width) * 4;
      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];
      noStroke();
      fill(r, g, b, a);
      rect(x, y, max, max);
    }
  }
}

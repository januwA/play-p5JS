// noiseDetail（）改变Perlin噪声函数的结果
// Video: https://www.youtube.com/watch?v=D1BBj2VaBl4&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=5

let inc = 0.01;
let inputEle;
let inputEle2;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);

  createElement("br");
  let s1 = createSpan('八度音程(1): ')
  inputEle = createSlider(0, 24, 0, 1);
  inputEle.changed(() => {
    s1.html(`八度音程(${inputEle.value()}): `)
  })


  createElement("br");
  let s2 = createSpan('每个八度的衰退因数(0.1): ')
  inputEle2 = createSlider(0, 1, 0, 0.1);
  inputEle2.changed(() => {
    s2.html(`每个八度的衰退因数(${inputEle2.value()}): `)
  })
}

function draw() {
  
  noiseDetail(inputEle.value(), inputEle2.value());
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
}

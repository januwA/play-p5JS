let loading;
let angle = 0;
let img;

function setup() {
  createCanvas(600, 400);
  resetInit();
  let btn = createDiv("<button>reset</button>");
  btn.mousePressed(resetInit);
}

function resetInit() {
  loading = true;
  loadImage("https://i.loli.net/2019/03/21/5c930511e114c.jpg", resultImage => {
    img = resultImage;
    setTimeout(() => (loading = false), 2000);
  });
}

function draw() {
  background(0);
  if (loading) {
    translate(width / 2, height / 2);
    rotate(angle * 0.1);
    strokeWeight(4);
    stroke(255);
    line(0, 0, 150, 0);
    angle++;
  } else {
    background(0, 255, 0);
    image(img, 0, 0, width, height);
  }
}

let sliders = [];

let angle = 0;
let angleStep = 0.1;

function setup() {
  noCanvas();
  for (let i = 0; i < 100; i++) {
    let slider = createSlider(0, 255, 50);
    sliders.push(slider);
  }
}

function draw() {
  let offset = 0;
  for (let slider of sliders) {
    let x = map(sin(angle + offset), -1, 1, 0, 255);
    slider.value(x);
    offset += 0.02;
  }
  angle += angleStep;
}

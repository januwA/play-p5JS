// 噪音使用
// Video: https://www.youtube.com/watch?v=YcdldZ1E9gU&index=2&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD

let xoff = 0;
let slider;

function setup() {
  createCanvas(600, 400);
  slider = createSlider(0, 1, 0.01, 0.01);
}

function draw() {
  background(0);
  // let x = random(width);

  // noise 返回0-1.0的范围值
  // 如果xoff的值不改变，noise将返回相同的值
  let x = map(noise(xoff), 0, 1, 0, width);
  ellipse(x, height / 2, 20);

  xoff += slider.value();
}

// 噪音使用
// Video: https://www.youtube.com/watch?v=y7sgcFhk6ZM&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=3

let xoff1 = 0;
let xoff2 = 1000; // 设置偏移量，不然到时1和2的值很接近

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  let x = map(noise(xoff1), 0, 1, 0, width);
  let y = map(noise(xoff2), 0, 1, 0, height);
  ellipse(x, y, 20);

  xoff1 += 0.01;
  xoff2 += 0.01;
}

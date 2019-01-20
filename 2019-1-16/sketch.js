let rangeInput;
let input;

let t = 'Ajanuw';
let fontSize = 50;

function setup() {
  createCanvas(600, 400);

  my_createInput();
  my_createRange();
}

function handleInput() {
  t = input.value();
}

function draw() {
  background(255);

  fill('#f48');
  textSize(fontSize);
  textAlign(CENTER);
  textLeading(30);
  textStyle(BOLD);
  // textBounds()
  text(t, 300, 200);
}

// 文字内容控制器
function my_createInput() {
  input = createInput(t, 'text').input(() => {
    t = input.value();
  });
}

// 文字大小控制器
function my_createRange() {
  rangeInput = createInput(t, 'range')
    .attribute('min', '30')
    .attribute('max', '100')
    .attribute('value', fontSize)
    .input(() => {
      fontSize = rangeInput.value();
    });
}

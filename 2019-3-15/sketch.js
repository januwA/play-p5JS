// 使用p5.js振荡器来创建新的声音
// video: https://www.youtube.com/watch?v=Bk8rLzzSink&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=6
// wiki声音：https://zh.wikipedia.org/wiki/%E5%A3%B0%E9%9F%B3
// 声音的频率一般会以赫兹表示，记为Hz
// 频率：音调越高，频率越大；音调越低，频率越小。
// 波长：音调越高，波长越短；音调越低，波长越长
// 振幅：音量（响度）越大，振幅越大；音量越小，振幅越小

let wave;
let slider;
let sel;

function setup() {
  createCanvas(100, 100);
  wave = new p5.Oscillator(); //创建一个在-1.0和1.0之间振荡的信号, 默认情况下，振荡采用正弦形状（“正弦”）的形式。其他类型包括“三角形”，“锯齿形”和“方形”。频率默认为每秒440次振荡（440Hz，等于“A”音符的音高
  wave.setType('triangle'); // 将类型设置为'sine'，'triangle'，'sawtooth'或'square'。
  wave.start();
  wave.amp(0.5, 1); // 将幅度设置在0和1.0之间
  wave.freq(400); // 频率设置

  slider = createSlider(0, 500, 200, 10);
  sel = ctSelect('sine triangle sawtooth square'.split(' '));
  sel.changed(() => {
    let type = sel.value();
    wave.setType(type);
  });
}

function draw() {
  background(0);
  wave.freq(slider.value(), 0.1);
}


function ctSelect(options = []) {
  let sel = createSelect();
  for (const v of options) {
    sel.option(v);
  }
  return sel;
}
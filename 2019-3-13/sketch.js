// p5.js声音库以使用音频。如何加载声音文件并在浏览器中播放。
// video: https://www.youtube.com/watch?v=Pn1g1wjxl_0&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW
// docs: https://p5js.org/zh-Hans/reference/#/libraries/p5.sound

let song;
let sliderRate;
let sliderPan;

function preload() {
  song = loadSound("song.mp3");
}

function setup() {
  noCanvas();

  sliderRate = createSlider(0, 3, 1, 0.5);
  let p1 = createP("播放速率(Rate): ");
  sliderRate.parent(p1);

  sliderPan = createSlider(-1, 1, 0, 1);
  let p2 = createP("立体声平移(Pan): ");
  sliderPan.parent(p2);

  song.setVolume(0.5); // 音量大小
  song.play(); // 播放
  // song.stop(); // 暂停
}

function draw() {
  song.rate(sliderRate.value()); // 设置声音文件的播放速率。会改变速度和音高。小于零的值将反转音频缓冲区
  song.pan(sliderPan.value()); //将p5.sound对象的立体声平移设置为-1.0（左）和1.0（右）之间的浮点数。默认值为0.0（中心）。
}

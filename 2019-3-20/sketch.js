// FFT（快速傅里叶变换）是一种分析波形内各个 音频的分析算法 。
// 使用p5.FFT对象来分析声音文件的频率（频谱数组）
// video: https://www.youtube.com/watch?v=2O3nm0Nvbi4&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=11

let song; // 歌曲
let fft; // 振幅
let url = '../2019-3-19/song.mp3';
let bins = 64;
let w;

function preload() {
  song = loadSound(url, () => {
    song.play();
  });
}

function toggle() {
  if (song.isPlaying()) {
    song.pause()
  } else {
    song.play()
  }
}

function setup() {
  colorMode(HSB);
  createCanvas(400, 400);
  createElement('br', '')
  createButton('toggle').mousePressed(toggle);
  fft = new p5.FFT(0.91, bins);
  w = width / bins;
}

function draw() {
  background(0);
  let spectrum = fft.analyze();

  noStroke()
  for (let i = 0; i < spectrum.length; i++) {
    const amp = spectrum[i];
    let y = map(amp, 0, 255, height, 0);
    fill(i, 255, 255);
    rect(i * w, y, w - 2, height - y);
  }

}
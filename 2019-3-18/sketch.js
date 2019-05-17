// 使用p5.js声音库中的getLevel（）函数来绘制随时间变化的幅度（音量）
// video: https://www.youtube.com/watch?v=jEwAMgcCgOA&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=9

let song; // 歌曲
let amp; // 振幅
let ampHistory = [];
let url = './song.mp3'

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
  createCanvas(200, 200);
  amp = new p5.Amplitude();

  window.addEventListener('keydown', e => {
    if (e.keyCode && e.keyCode === 32) toggle();
  })

  createElement('br', '')
  let input = createInput('', 'text');
  createButton('got Song').mousePressed(() => {
    song.stop();
    song = loadSound(input.value(), () => {
      song.play();
    }, (e) => {
      alert(JSON.stringify(e));
      console.error(e);
      preload();
    })
  })

  createElement('br', '')
  createButton('toggle').mousePressed(toggle);
}

function draw() {
  background(0);
  let vol = amp.getLevel();
  ampHistory.push(vol);
  noFill()
  stroke(255)
  push()
  let cy = map(vol, 0, 1, height, 0)
  translate(0, height / 2 - cy)
  beginShape()
  for (let i = 0; i < ampHistory.length; i++) {
    const item = ampHistory[i];
    let y = map(item, 0, 1, height, 0)
    vertex(i, y)
  }
  endShape()
  pop()
  if (ampHistory.length > width - 50) {
    ampHistory.splice(0, 1);
  }

  stroke('red')
  line(ampHistory.length, 1, ampHistory.length, height)
}
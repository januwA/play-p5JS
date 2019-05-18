// 将一首歌的振幅（音量）值绘制成径向（圆形）图形
// video: https://www.youtube.com/watch?v=h_aTgOl9J5I&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=10

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
  createCanvas(400, 400);
  angleMode(DEGREES);
  amp = new p5.Amplitude();

  // createElement('br', '')
  // let input = createInput('', 'text');
  // createButton('got Song').mousePressed(() => {
  //   song.stop();
  //   song = loadSound(input.value(), () => {
  //     song.play();
  //   }, (e) => {
  //     alert(JSON.stringify(e));
  //     console.error(e);
  //     preload();
  //   })
  // })

  createElement('br', '')
  createButton('toggle').mousePressed(toggle);
}

function draw() {
  background(0);
  let vol = amp.getLevel();
  ampHistory.push(vol);
  translate(width / 2, height / 2)
  stroke(255);
  strokeWeight(2)
  noFill()
  beginShape()
  for (let i = 0; i < ampHistory.length; i++) {
    let r = map(ampHistory[i], 0, 1, 30, width / 2);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  if (ampHistory.length > 360) {
    endShape(CLOSE)
    ampHistory.splice(0, 1);
  } else {
    endShape()
  }

}
// video: https://www.youtube.com/watch?v=NCCHQwNAN6Y&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=4
let song;
let playButton;
let jumpButton;
let amp;

function preload() {
  song = loadSound("song.mp3");
}

function setup() {
  createCanvas(200, 200);
  amp = new p5.Amplitude(); // 幅度测量的体积
  playButton = createButton("播放");
  jumpButton = createButton("jump");
  playButton.mousePressed(() => {
    const 没有播放 = !song.isPlaying();
    if (没有播放) {
      song.setVolume(0.3);
      song.play();
      playButton.html("暂停");
    } else {
      song.pause();
      playButton.html("播放");
    }
  });
  jumpButton.mousePressed(() => {
    // console.log(song.duration()); // 音频总长
    // console.log(song.currentTime());// 当前播放时间

    let t = song.currentTime() + 20;
    console.log(t);
    song.jump(t);
  });
}

function draw() {
  background(0);

  // fill(255, 0, 0);
  // noStroke();
  // let w = map(song.currentTime(), 0, song.duration(), 0, width);
  // rect(0, 0, w, height);

  let vol = amp.getLevel(); // 返回单个幅度读数
  let diam = map(vol, 0, 0.3, 30, 50);
  noStroke();
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, diam, diam);
}

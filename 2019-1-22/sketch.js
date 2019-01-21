// 获取视频中的图片，并画在canvas上
// https://www.youtube.com/watch?v=oLiaUEKsRws

let video;
let btn;
let snapshots = [];
let counter = 0;
let total = 19

function setup() {
  createCanvas(320, 240);
  background(200);

  video = createCapture(VIDEO, ready);
  video.size(320, 240);

  // btn = createButton("snap");
  // btn.mouseClicked(takesnap);
}
let go = false;
function ready() {
  go = true;
}

function draw() {
  if (go) {
		snapshots[counter] = video.get();
		counter++
		if(counter === total){
			counter = 0
		}
  }
  let w = 80;
  let h = 60;
  let x = 0;
  let y = 0;
  for (let i = 0; i < snapshots.length; i++) {
    const img = snapshots[i];
		// tint(255, 50);
		let index = (i + frameCount) % snapshots.length
    image(snapshots[index], x, y, w, h);
    x += w;
    if (x > width) {
      x = 0;
      y += h;
    }
  }
  // image(video, 0, 0);
}

function takesnap() {
  snapshots.push(video.get());
  // image(video, 0, 0)
}

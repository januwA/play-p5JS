// 使用xkcd中的颜色数据库来创建“单词向量”
// video: https://www.youtube.com/watch?v=mI23bDF0VRI&list=PLRqwX-V7Uu6aQ0oh9nH8c6U1j9gCg-GdF&index=2
// xkcd下载: https://github.com/dariusk/corpora/tree/master/data/colors

let data;
let vectors;
let pos;

function preload() {
  data = loadJSON('./xkcd.json');
}

function processData(data) {
  let vectors = {};
  let colors = data.colors;
  for (let i = 0; i < colors.length; i++) {
    const label = colors[i].color;
    let rgb = color(colors[i].hex);
    vectors[label] = createVector(red(rgb), green(rgb), blur(rgb));
  }
  return vectors;
}

function setup() {
  noCanvas();
  vectors = processData(data);

  // 生成一个随机的3d颜色范围
  pos = createVector(random(255), random(255), random(255));
}

function draw() {
  let colorName = findNearest(pos)
  let div = createDiv(colorName);
  let v = vectors[colorName];
  div.style('color', `rgb(${v.x}, ${v.y}, ${v.z})`);
  
  let r = p5.Vector.random3D();
  r.mult(50); // x 50
  pos.add(r);

  // 控制在范围类
  pos.x = constrain(pos.x, 0, 255);
  pos.y = constrain(pos.y, 0, 255);
  pos.z = constrain(pos.z, 0, 255);
  frameRate(2);
}

// 寻找最近的
function findNearest(v) {
  let keys = Object.keys(vectors);
  // 把vectors下每个颜色与随机的pos比较，然后排序，返回最接近的那一个
  keys.sort((ka, kb) => {
    let d1 = distance(v, vectors[ka]);
    let d2 = distance(v, vectors[kb]);
    return d1 - d2;
  });
  return keys[0];
}

function distance(v1, v2) {
  return p5.Vector.dist(v1, v2);
}
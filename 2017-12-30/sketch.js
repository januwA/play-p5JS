var img;
var myimage;

function preload() {
  //需要在 这个钩子 函数里面加载图片
  img = loadImage("https://i.loli.net/2018/09/05/5b8fce8bbe8b5.jpg");
}

function setup() {
  createCanvas(600, 400);
  myimage = new myImage(img);
}

function draw() {
  background(0);
  myimage.update();
  myimage.show();
}

class myImage {
  constructor(img) {
    this.img = img;
    this.x = 0;
    this.y = 0;
  }
  show() {
    image(this.img, this.x, this.y, width, height);
  }
  update() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}

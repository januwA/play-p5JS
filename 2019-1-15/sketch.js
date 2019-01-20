// 图片不能过大
let ctx;
function setup() {
  ctx = createCanvas(400, 200);
  ctx.style('border', '3px dashed')
  background(0);
  ctx.drop(gotFile);
}

function gotFile(file) {
  createP(`${file.name} ${file.size}`);
  let img = createImg(file.data).hide();
  image(img, 0, 0, 400, 200);
}

function draw(){

}
// p5.asciiart是一个简单易用的p5js图像到ASCII艺术转换器。由Pawel Janicki创建
// https://www.tetoki.eu/asciiart/index.html

let images = [];
let myAsciiArt;
let graphics;
let ascii_arr;
let cyclic_t;

function preload() {
  images[0] = loadImage('https://i.loli.net/2019/05/25/5ce8ae922c7d545482.jpg');
}

function setup() {
  createCanvas(400, 400);
  graphics = createGraphics(120, 60);
  graphics.pixelDensity(1);
  myAsciiArt = new AsciiArt();
  myAsciiArt.printWeightTable();
  textAlign(CENTER, CENTER);
  textFont('monospace', 8);
  textStyle(NORMAL);
  noStroke();
  fill(255);
  frameRate(30);
}

function draw() {
  background(0);
  cyclic_t = millis() * 0.0002 % images.length;
  graphics.image(images[floor(cyclic_t)], 0, 0, graphics.width, graphics.height);
  graphics.filter(POSTERIZE, 3);
  ascii_arr = myAsciiArt.convert(graphics);
  myAsciiArt.typeArray2d(ascii_arr, this);

  // 如果要取消动画，注释下面三行即可
  tint(255, pow(1.0 - (cyclic_t % 1.0), 4) * 255);
  image(images[floor(cyclic_t)], 0, 0, width, height);
  noTint();
}

function mouseReleased() {
  /*
    如果要导出生成的ASCII图形，可以使用内置的 convert2dArrayToString 将字形数组转换为字符串
  */
  console.log(myAsciiArt.convert2dArrayToString(ascii_arr));
}


typeArray2d = function (_arr2d, _dst, _x, _y, _w, _h) {
  if (_arr2d === null) {
    console.log('[typeArray2d] _arr2d === null');
    return;
  }
  if (_arr2d === undefined) {
    console.log('[typeArray2d] _arr2d === undefined');
    return;
  }
  switch (arguments.length) {
    case 2: _x = 0; _y = 0; _w = width; _h = height; break;
    case 4: _w = width; _h = height; break;
    case 6: /* nothing to do */ break;
    default:
      console.log(
        '[typeArray2d] bad number of arguments: ' + arguments.length
      );
      return;
  }
  /*
    Because Safari in macOS seems to behave strangely in the case of multiple
    calls to the p5js text(_str, _x, _y) method for now I decided to refer
    directly to the mechanism for handling the canvas tag through the "pure"
    JavaScript.
  */
  if (_dst.canvas === null) {
    console.log('[typeArray2d] _dst.canvas === null');
    return;
  }
  if (_dst.canvas === undefined) {
    console.log('[typeArray2d] _dst.canvas === undefined');
    return;
  }
  var temp_ctx2d = _dst.canvas.getContext('2d');
  if (temp_ctx2d === null) {
    console.log('[typeArray2d] _dst canvas 2d context is null');
    return;
  }
  if (temp_ctx2d === undefined) {
    console.log('[typeArray2d] _dst canvas 2d context is undefined');
    return;
  }
  var dist_hor = _w / _arr2d.length;
  var dist_ver = _h / _arr2d[0].length;
  var offset_x = _x + dist_hor * 0.5;
  var offset_y = _y + dist_ver * 0.5;
  for (var temp_y = 0; temp_y < _arr2d[0].length; temp_y++)
    for (var temp_x = 0; temp_x < _arr2d.length; temp_x++)
      /*text*/temp_ctx2d.fillText(
      _arr2d[temp_x][temp_y],
      offset_x + temp_x * dist_hor,
      offset_y + temp_y * dist_ver
    );
}
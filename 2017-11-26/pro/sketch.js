let l = null;
let x = 0, y = 0;
let spacing = 22; // 上下间距


function setup() {
	createCanvas(400, 400);
	background(0);
	l = new Line();
}

function draw() {
	l.show()
}

class Line {
	constructor() {

	}
	show() {
		stroke(255); // 线条颜色
		noStroke(); // 取消线条
		if(random(1) < 0.3){
			fill('red')
			rect(x,y,spacing,spacing)
			// line(x , y , x+spacing, y+spacing); // x1 y1 x2 y2
		}else{
			fill('pink')
			rect(x,y,spacing,spacing); // 方形 x y w h
			// line(x , y+spacing , x+spacing, y);
		}
		x = x+spacing;
		if(x > width){ // width 默认 canvas的 宽度
			x = 0;
			y += spacing;
		}
		if(y > height){
			x = 0;
			y = 0;
		}
	}
}

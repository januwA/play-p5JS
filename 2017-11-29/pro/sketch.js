var r = 0,
		g = 0,
		b = 255;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	r = map(mouseX,0,width, 0, 255);// map(参数 ,w从哪里开始,w到哪里结束,颜色从开始,颜色从那结束)
	g = map(mouseX,0,width, 255, 0);// map(参数 ,w从哪里开始,w到哪里结束,颜色从开始,颜色从那结束)
	// bgcol = mouseX /2
	background(r, g , b);
	fill(255,200,200);

	ellipse(mouseX, 200, 50, 50);
}

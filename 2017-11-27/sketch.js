let x = 0;
function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(255,155,100)// 如果把背景一直渲染 相当与擦掉 canvas
	noStroke()
	fill(255,255,200)
	ellipse(mouseX, mouseY, 20, 20); //mouseX 获取鼠标x坐标

	fill(200,255,200);
	rect(x,100,50,50)
	x = x + 1;
}

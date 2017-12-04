var x = 0;
var speed = 3;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0)
	stroke('white')
	strokeWeight(2)
	noFill()

	ellipse(x,200,100)
	if(x > width || x < 0){
		speed = speed * -1
		// -3 * -1
		// 3
		// 3 * -1
		// -3
	}
	x += speed;
}

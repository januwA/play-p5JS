var offset = 0;
function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0)
	noStroke()

	for (var x = 0; x <= mouseX ; x+= 50) {
		for (var y = 0; y <= height; y+= 50) {


		fill(random(255), random(255), random(255))
		ellipse(x + offset, y,30)
		}
	}
	// offset++
}

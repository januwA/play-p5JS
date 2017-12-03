function setup() {
	createCanvas(600, 400);
}
// mouseIsPressed像是 mousedown

var on = false;
function draw() {
	background(0)

	if( on){
		background(0, 255, 0)
	}else{
		background(0)
	}

	stroke(255)
	strokeWeight(4)
	noFill()

	if( mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250 ){
		fill(0, 255, 255)
	}
	rectMode(CENTER)// 居中
	rect(300, 200, 100, 100)
}

function mousePressed(){
	if( mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250 ){
		on = !on
	}
}

// if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
// 	fill(255, 0, 0)
// 	if( mouseIsPressed ){
// 		background(0, 255, 0)
// 	}
// }

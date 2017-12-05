var objLeft;
var objRight;

function setup() {
	createCanvas(600, 400);
	objLeft = new Obj({x:0,speed:3});
	objRight = new Obj({x:width,speed:-3});
}

function draw() {
	background(0)
	objLeft.show()
	objRight.show()
}

class Obj {
	constructor(props) {
		this.x = props.x;
		this.speed = props.speed;
	}
	show(){
		stroke('white')
		strokeWeight(2)
		noFill()
		ellipse(this.x,200,100)
		if(this.x > width || this.x < 0){
			this.speed = this.speed * -1
			// -3 * -1
			// 3
			// 3 * -1
			// -3
		}
		this.x += this.speed;
	}
}

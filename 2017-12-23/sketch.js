var balls = []

function setup() {
	createCanvas(600, 400);

	for(let i =0; i< 200; i++){
		balls[i] = new Ball();
	}

}

function draw() {
	background(0);

	for(let i=0; i<balls.length; i++){
		balls[i].run();
	}

}

class Ball {
	constructor(){
		this.x = random(0, width)
		this.y = random(0, height)
	}
	run(){
		this.display()
		this.move()
	}
	display(){
		stroke(random(0, 255), random(0, 255), random(0, 255))
		noFill()
		ellipse(this.x, this.y ,24,24)
	}

	move(){
		this.x += random(-1,1)
		this.y += random(-1,1)
	}
}

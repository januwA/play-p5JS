let stars = [];
let speed;
let pz;

function setup() {
	createCanvas(600, 400);

	for (let i = 0; i < 300; i++) {
		stars.push(new Star());
	}
}

function draw() {
	speed = map(mouseX, 0, width, 0, 50)
	background(0)
	translate(width / 2, height / 2)
	for (let star of stars) {
		star.update();
		star.show();
	}
}


class Star {
	constructor() {
		this.x = random(-width / 2, width/ 2)
		this.y = random(-height / 2, height / 2)
		this.z = random(width);
		pz = this.z;
	}

	update() {
		this.z -= speed;
		if (this.z < 1) {
			this.z = width;
			this.x = random(-width / 2, width / 2)
			this.y = random(-height / 2, height / 2)
			pz = this.z;
		}
	}

	show() {
		fill(255)
		noStroke()

		let sx = map(this.x / this.z, 0, 1, 0, width)
		let sy = map(this.y / this.z, 0, 1, 0, height)
		let r = map(this.z, 0, width, 16, 0)
		// ellipse(sx, sy, r)

		let px = map(this.x / pz, 0, 1, 0, width)
		let py = map(this.y / pz, 0, 1, 0, height)

		pz = this.z;
		stroke(255)
		line(px, py, sx, sy)
		// line(sx / 2.5, px, sy / 1.8, py)
		// line(sx, px, sy, py)
		// line(sx - px, sx - py, sx, sy
		// line(px - sx, py - sx, sx, sy)
		// line(px / sx, py / sx, sx, sy)
	}
}
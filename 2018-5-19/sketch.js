/**
 * 在画布上随机的x,y出现circle，放大半径，直到边缘停止
 * 检查随机出现的x,y于circles中的每一个知否叠加，叠加的话放弃这个随机的x,y
 * 半径在放大的时候，碰到其他circle，停止
 * 加载图片，读取图片每个像素的亮度，黑色为0，白色为100，记录下亮度大于1的x,y值 spots
 * 取消在画布上随机的x,y。转而在spots中获取随机的向量的x,y
 */


let circles = []
let img;
let spots = []
let imgPath = 'http://per.kelantu.com/photos/1526778099-FgkZQBk121v5gB6jjWoz1Gmv-zKm-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:NYhYqeY6Ho3pSBvaF1RG1pgatI8='

function preload() {
	img = loadImage(imgPath)
}

function setup() {
	createCanvas(600, 400)
	img.loadPixels();

	for (let x = 0; x < img.width; x++) {
		for (let y = 0; y < img.height; y++) {
			// 这里和processing 不同的是要 *4
			let index = (x + y * img.width) * 4;
			let c = img.pixels[index];
			let b = brightness(c)
			if (b > 10) {
				spots.push(createVector(x, y))
			}
		}
	}
}

function draw() {
	background(0)

	for (let i = 0; i < 5; i++) {
		let newC = newCircle()
		if (newC !== null) {
			circles.push(newC)
		}
	}

	for (let c of circles) {
		if (c.growing) {
			if (c.edges()) {
				c.growing = false;
			} else {
				for (let other of circles) {
					if (c === other) continue;
					let d = dist(c.x, c.y, other.x, other.y)
					if (d - 2 < c.r + other.r) {
						c.growing = false;
						break;
					}
				}
			}
		}
		c.run();
	}

	if (circles.length > 800) {
		noLoop();
	}
}


function newCircle() {

	let r = int(random(0, spots.length))
	let spot = spots[r]
	let x = spot.x
	let y = spot.y

	let valid = true;
	for (let c of circles) {
		let d = dist(x, y, c.x, c.y)
		if (d < c.r) {
			valid = false;
			break;
		}
	}

	if (valid) {
		let strokeC = color(random(255), random(255), random(255))
		return new Circle(x, y, 1, strokeC)
	} else {
		return null
	}
}

class Circle {
	constructor(x, y, r, strokeColor = 255) {
		this.x = x
		this.y = y
		this.r = r
		this.strokeColor = strokeColor

		this.growing = true;
	}

	run() {
		this.grow()
		this.show()
	}

	show() {
		noFill()
		strokeWeight(2)
		stroke(this.strokeColor)
		ellipse(this.x, this.y, this.r * 2)
	}

	grow() {
		if (this.growing) {
			this.r += 0.5;
		}
	}

	edges() {
		// this.r > 12 是后面填上去的
		return (this.x + this.r > width || this.x - this.r < 0 || this.y + this.r > height || this.y - this.r < 0 || this.r > 12)
	}
}
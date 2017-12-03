
var os = [];

function setup() {
	createCanvas(600, 400);
	for(let i=0; i< random(5,7); i++){
		os.push( new Over() )
	}
}

function draw() {
	background(0)

	for(let i=0; i<os.length; i++){
		os[i].show()
		os[i].update()
	}
}

class Over {
	constructor(props) {
		this.r = random(100, 255)
		this.g = random(100, 255)
		this.b = random(100, 255)

		this.x = 0;
		this.y = height;

		this.speetX = random(2, 6)
		this.speetY = random(2, 6)

		this.zx = random(2, 6)
		this.zy = random(2, 6)
	}
	update(){
		this.y += this.speetY
		this.x += this.speetX
	}
	show(){
		stroke( this.r, this.g, this.b)
		strokeWeight(3)
		noFill()
		ellipse(this.x, this.y,100,100)
		if( this.x > width){// 超过了canvas的width 反弹
			this.speetX = -this.zx;
		}
		if( this.x < 0){// 小于了 canvas的width 反弹
			this.speetX = this.zx;
		}
		if( this.y > height){// 大于了 canvas的height 反弹
			this.speetY = -this.zy
		}
		if( this.y < 0){// 小于了 canvas的height 反弹
			this.speetY = this.zy
		}

	}
}

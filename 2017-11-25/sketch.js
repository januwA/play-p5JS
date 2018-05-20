
var particles = []


function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0)
	// 这个 draw() 函数更 setInterval有点像
	for(let i = 0; i< 3; i++){
		var p = new Particle()
		particles.push(p)
	}
	for(let i=particles.length-1; i >0; i--){
		particles[i].update()
		particles[i].show(random(0,255),random(0,255),random(0,255))
		if(particles[i].remove()){
			//透明度为0的粒子删除掉 清空缓存
			particles.splice(i,1);
		}
	}
}

class Particle {
	// 粒子 ...
	constructor() {
		this.x = random(1, 600) // 控制初始化的 x可以控制根
		this.y = 400
		this.vx = random(-2, 2) // -2 至 2 之间
		this.vy = random(-4, -1) // -5 至 -1 之间

		this.alpha = 255; // default alpha
	}
	remove(){
		return this.alpha < 0
	}
	update(){
		// 让创建后的粒子 更改x 和 y的位置，照成移动
		// x偏移量小, y偏移量
		this.x += this.vx;
		this.y += this.vy;
		this.alpha -= 2
	}
	show(r,g,b){
		 // stroke(r, g, b) // border描边颜色
		 noStroke() // 取消 border
		fill(255,97,3,this.alpha) // 填充颜色 0黑色 255白色
		ellipse(this.x, this.y, 16) // 椭圆
	}
}

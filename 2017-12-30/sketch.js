var img;
var myimage;
function preload(){
	//需要在 这个钩子 函数里面加载图片
	img  = loadImage('http://per.kelantu.com/photos/1514298377-FqGNCrYwvU39g3Dk7vfLRZjCfVrm-orij0?e=3153600000&token=CT86R8zZYVXDyHWEWFoMX4pz0ksOzxtKCaC80si4:dBl3h8VhkxczWNeq6-ddM8SGiGo= ')

}
function setup() {
	createCanvas(600, 400);
	myimage = new myImage(img);
}

function draw() {
	background(0)
	myimage.update()
	myimage.show()
}

class myImage{
	constructor(img){
		this.img = img
		this.x = 0;
		this.y = 0;
	}
	show(){
		image(this.img, this.x, this.y, width, height)
	}
	update(){
		this.x += random(-1, 1)
		this.y += random(-1, 1)
	}
}

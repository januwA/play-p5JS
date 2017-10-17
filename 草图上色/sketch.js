function setup() {
  // put setup code here
    createCanvas(400, 400);
}

function draw() {
  // put drawing code here
    /*
    arc 弧 arc(x, y, xr, yr, start,end, [开关[OPEN,CHORD]] )
    ellipse 椭圆 
    line 线 line(30, 20, 85, 75);
    point 点 point(x,y)
    quad 四 quad(x1,y1,x2,y2,x3,y3,x4,y4)
    rect 矩形 rect(x,y,w,h,[tl],[tr],[br],[bl])
    triangle 三角形 triangle(x1,y1,x2,y2,x3,y3)
    
    stroke('red) color of border
    fill(255,0,0,[0-255]) color of fill
    定义颜色 在模块的最上面
    */
    background('#ccc')
/*    ellipseMode(CENTER)
    rectMode(CENTER)*/
    fill(0,255,0, 100)
    rect(0,0, 40, 60)
    
    fill(255,0,0)
    rect(0,120, 80, 60)
    
    noFill();
    triangle(50,100,100,200,0,200)
    quad(138, 3, 86, 20, 69, 63, 130, 76);
    line(30, 20, 85, 75);
    stroke(0, 0,0);
    
    fill(255,0,255, 188);
    arc(150, 155, 50, 50, 0, 1.5*PI);
}
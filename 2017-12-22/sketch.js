var words = ['aoo', 'boo', 'coo', 'doo']
var index = 0;


function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0)

	fill('red');
	textSize(22)
	text(words[index], 12, 200)
}

function mousePressed(){
	index += 1
	if( index === words.length){
		index = 0
	}
}

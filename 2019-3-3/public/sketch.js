// Video: https://www.youtube.com/watch?v=bjULmG8fqc8&list=PLRqwX-V7Uu6b36TzJidYfIYwTFEq3K5qH&index=1

var socket;

function setup() {
  createCanvas(600, 400);
  background(0);

  socket = io("http://localhost:3000");
  socket.on("connect", () => {
    socket.on("global data", function(data) {
      noStroke();
      fill(255);
      ellipse(data.x, data.y, 30);
    });
  });
}

function draw() {}

function mouseDragged() {
  socket.emit("news", {
    x: mouseX,
    y: mouseY,
  });
}

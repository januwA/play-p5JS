let express = require("express");
let socket = require("socket.io");
let app = express();
let x = 0;

app.use(express.static("public"));

let server = app.listen(3000, () => {
  console.log("server is start");
});

let io = socket(server);

io.on("connection", function(socket) {
  x++;
  console.log("当前在线总人数：" + x);

  socket.on("news", function(data) {
    io.emit("global data", data);
  });

  myDisconnect(socket);
});

function myDisconnect(socket) {
  socket.on("disconnect", function() {
    x--;
    console.log("当前在线总人数：" + x);
  });
}

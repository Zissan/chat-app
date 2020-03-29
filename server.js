const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
io.on("connection", socket => {
  console.log("A USER IS CONNECTED");
  io.emit("message", "Welcom to CHAT BOX");
  socket.on("disconnect", function() {
    console.log("USER DISCONNECTED");
  });
});

server.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});

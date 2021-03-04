const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const port = 8000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const equationsRouter = require('./routes/equations.router');
app.use('/api/equations', equationsRouter);

io.on("connection", (socket) => {
  console.log("new user has connected");

  socket.on("disconnect", () => {
    console.log("a user has disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
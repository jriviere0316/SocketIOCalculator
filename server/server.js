require('dotenv').config()
const express = require("express");
const app = express();
const http = require("http");
const PORT = process.env.PORT || 5000;

const socketIO = require("socket.io");
const server = http.createServer(app);
const io = socketIO(server);

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const calculatorRouter = require("./routes/calculator.router");
app.use("/api/calculator", calculatorRouter);

app.use(express.static("build"));

io.on("connection", (socket) => {
  io.emit('message', 'A user has connected');

  socket.on("disconnect", () => {
    io.emit('message', 'A user has disconnected');
  });

  socket.on('add_equation', (equation) => { 
    io.emit('socketEquation', equation)
  })
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;

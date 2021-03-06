const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//route includes
const calculatorRouter = require('./routes/calculator.router');
app.use('/api/calculator', calculatorRouter);

// app.use(express.json());
//server static files
app.use(express.static('build'));


io.on("connection", (socket) => {
  console.log("new user has connected");

  socket.on("disconnect", () => {
    console.log("a user has disconnected");
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
// api 
const express = require('express');
const app = express();
// var http = require("http");
//  nodejs module
const httpServer = require('http').createServer(app);
//  socket enbaled server
const io = require('socket.io')(httpServer);
io.on("connection", function (socket) {
    console.log("New client connected");
    console.log(socket.id);
    socket.on("color", function (color) {
        console.log(color);
        socket.broadcast.emit('colorchange', color);
    })
})
// app.get("/home", function (req, res) {
//     res.end("<h1>Welcome to home Page</h1>")
// })
//  connection
httpServer.listen(3000, function () {
    console.log("Server started at port 3000");
}) 
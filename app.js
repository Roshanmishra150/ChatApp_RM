
// const { static } = require("express");
const express = require("express")
const app = express();
const http = require("http").createServer(app)
const port = process.env.PORT || 3000;

http.listen(port, () => {
    console.log(`connected to port umber ${port}`) 
})

// const static_path = (__dirname + "/public")
app.use(express.static(__dirname + "/public"))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

// socket 
const io = require("socket.io")(http)

io.on("connection", (socket) => {
    console.log("conected..........")
    socket.on("message", (msg) => {
        socket.broadcast.emit("message", msg)
    })
})

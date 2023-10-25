const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
const port = process.env.PORT || 4000;

let chatGroups = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('getAllGroups', () => {
        socket.emit('groupList', chatGroups);
    });

    socket.on('create_group', (currentGroupName) => {
        console.log("received group", currentGroupName)

        chatGroups.unshift({
            id: chatGroups.length + 1,
            currentGroupName,
            messages: [],
        });

        socket.emit('groupList', chatGroups);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(port, () => {
    console.log('Server running at http://localhost:',port);
})
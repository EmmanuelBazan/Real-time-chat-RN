const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
const port = process.env.PORT || 4000;

let chatGroups = [
    {
        id: 1,
        name: 'grupo 1',
        messages: [],
    },
    {
        id: 2,
        name: 'grupo 2',
        messages: [],
    },
    {
        id: 3,
        name: 'grupo 3',
        messages: [],
    },
    {
        id: 4,
        name: 'grupo 4',
        messages: [],
    },
];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('getAllGroups', () => {
        console.log('⚠️⚠️⚠️ Listen getAllGroups')
        socket.emit('chatList', chatGroups);
    });

    socket.on('createChat', (currentGroupName) => {
        console.log("received group", currentGroupName)

        chatGroups.unshift({
            id: chatGroups.length + 1,
            name: currentGroupName,
            messages: [],
        });

        socket.emit('chatList', chatGroups);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(port, () => {
    console.log('Server running at http://localhost:',port);
})
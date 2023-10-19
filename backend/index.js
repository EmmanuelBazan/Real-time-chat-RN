const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://10.0.2.2:3000/'
    }
})

const PORT = 4000;

let chatGroups = [];

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

socketIO.on('connection', (socket) => {
    console.log(socket.id,"user is just connected");
})

app.get('/api', (req,res) => {
    console.log(req,res);
    res.json(chatGroups);
});

http.listen(PORT, () => {
    console.log('Server listening on',PORT);
});
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve the static HTML file (index.html)
app.use(express.static(__dirname + '/public'));

// WebSocket connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle chat messages
    socket.on('chatMessage', (message) => {
        // Broadcast the message to all connected clients
        io.emit('chatMessage', message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

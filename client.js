<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebSocket Client</title>
</head>
<body>
    <h1>WebSocket Client</h1>
    <script src="client.js"></script>
</body>
</html>
// client.js
const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', () => {
    console.log('Connected to WebSocket server');
    socket.send('Hello server!');
});

socket.addEventListener('message', (event) => {
    console.log(`Message from server: ${event.data}`);
});

socket.addEventListener('close', () => {
    console.log('WebSocket connection closed');
});

socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
});

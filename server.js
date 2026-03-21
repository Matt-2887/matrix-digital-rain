const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Matrix Digital Rain server is running on port ${PORT}`);
    console.log(`Access it at: http://your-server-ip:${PORT}`);
});

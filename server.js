const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Matrix Blog server is running on port ${PORT}`);
    console.log(`Home: http://101.33.213.52:${PORT}`);
    console.log(`Login: http://101.33.213.52:${PORT}/login`);
    console.log(`Blog: http://101.33.213.52:${PORT}/blog`);
});

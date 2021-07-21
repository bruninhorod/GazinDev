const express = require('express');
const server = express();

server.get('/teste', (req, res) => {
    res.send('ESSE É O BACKEND');
})

server.listen(3000, () => {
    console.log('API ON');
});

const express = require('express');
const server = express();
server.use(express.json());

const DevRoutes = require('./routes/DevRoutes');
server.use('/dev', DevRoutes);

server.listen(3000, () => {
    console.log('API LIGADA - SEM ERROS');
});

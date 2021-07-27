const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const DevRoutes = require('./routes/DevRoutes');
server.use('/dev', DevRoutes);

server.listen(3333, () => {
  console.log('API LIGADA - SEM ERROS');
});

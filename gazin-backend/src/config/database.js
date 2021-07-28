const mongoose = require('mongoose');

const url = 'mongodb://mongo:27017/dev';
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;

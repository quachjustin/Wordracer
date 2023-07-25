const express = require("express");
const app = express();
const socketio = require('socket.io');
const mongoose = require('mongoose');

//default listens to 3000 so we pick unused port
const expressSever = app.listen(3001);
const io = socket.io(expressServer);

mongoose.connect('mongodb://localhost:27017/Wordracer', 
                {useNewUrlParser: true, useUnifiedTopology : true});
// require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config({
      path: './config.env'
});
const cors = require("cors");
const express = require('express');
const http = require('http');    
const app = express();
const connectDB = require('./controllers/config/db');
const initializeSocket = require('./socket/index.js');

// import ChatRoute from './routes/ChatRoute.js';
// import MessageRoute from './routes/MessageRoute.js';

// const server = http.createServer(app);

//connecting with database
connectDB();


app.use(cors());

app.use(express.urlencoded({
      extended: false
}));



app.use(express.json());

//error handler should last middleware 
// app.use(errorHandler);

app.use('/api/auth', require("./routes/auth"));
app.use('/api/private', require("./routes/private"));
// app.use('/api/event',require("./routes/event"));
app.use('/api/chat', require("./routes/ChatRoute"));
app.use('/api/message', require("./routes/MessageRoute"));

// Initialize Socket.IO
// initializeSocket(server);

const PORT = process.env.PORT || 5000;


// const server = app.listen(PORT, (req, res) => {
//       console.log(`listening on PORT ${PORT}.....`);
// });
const server = app.listen(PORT, (req, res) => {
      console.log(`listening on PORT ${PORT}.....`);
});

const io = require('socket.io')(server, {
      pingTimeout: 60000,
      cors: {
            origin: "http://localhost:3000",
      }
})

let activeUsers = [];

io.on('connection', (socket) => {
      //adding new user
      socket.on('new-user-add', (newUserId) => {
            if (!activeUsers.some((user) => user.userId === newUserId)) {
                  activeUsers.push({
                        userId: newUserId,
                        socketId: socket.id
                  })
            }
            console.log("connected-user", activeUsers);
            io.emit('get-users', activeUsers);
      })


      

      socket.on('disconnect', () => {
            activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
            console.log("user disconnect", activeUsers);
            io.emit('get-users', activeUsers);
      });

     //send message to a specific user
      socket.on("send-message", (data) => {
            const {
                  receiverId
            } = data;
            const user = activeUsers.find((user) => user.userId === receiverId);
            console.log("socket data", data);
            if (user) {
                  io.to(user.socketId).emit("receive-message", data);
            }
      })
})

process.on("unhandledRejection", (err, Promise) => {
      console.log(`Logged Error: ${err}`);
      server.close(() => process.exit(1));
});
const socketIo = require('socket.io');

// const io = require('socket.io')(8800, {
//       cors: {
//             origin: 'https://localhost:3000',
//             credentials:true
//       }
// })

function initializeSocket(server) {
      const io = socketIo(server);


      let activeUsers = [];

      io.on('connection', (socket) => {
            //add new users
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
      });

};

module.exports = initializeSocket;
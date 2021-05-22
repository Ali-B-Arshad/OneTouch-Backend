const db = require('../../library/sequelize-cli/models');

const Groups = db.groups;
const Message = db.messages;
const User = db.user_details;
const Operator = db.Sequelize.Op;
const teamInfo = db.team_informations;


// const socketEvents = (io) => {
//   const users={}
//   io.on('connection', (socket) => {
//     console.log(`A user has connected! SocketId: ${socket.id}`);
//     const userId=socket.id;
//     if(!users[userId]){
//       users[userId] = socket.id;
//     }
//
//     socket.emit('yourID',userId);
//     // io.socket.emit('allUsers',users);
//     socket.emit('allUsers',users);
//
//     socket.on('disconnect', () => {
//       console.log(`SocketId: ${socket.id} has disconnected!`);
//       delete users[userId];
//     });
//
//     socket.on('callUser', (data)=>{
//       io.to(users[data.userToCall]).emit('hey', {signal: data.signalData, from: data.from})
//     })
//
//     socket.on('acceptCall', (data)=>{
//       console.log("34: ",data);
//       io.to(users[data.to]).emit('callAccepted', data.signal)
//     })
//
//     socket.on('close', (data)=>{
//       console.log("39: ",data);
//       io.to(users[data.to]).emit('close')
//     })
//
//     socket.on('rejected', (data)=>{
//       console.log("44: ",data);
//       io.to(users[data.to]).emit('rejected')
//     })
//
//   });
// };

const users = {};

const socketToRoom = {};

const socketEvents = (io) => {
  io.on('connection', (socket) => {
    socket.on("join room", roomID => {
      if (users[roomID]) {
        const length = users[roomID].length;
        if (length === 4) {
          socket.emit("room full");
          return;
        }
        users[roomID].push(socket.id);
      } else {
        users[roomID] = [socket.id];
      }
      socketToRoom[socket.id] = roomID;
      const usersInThisRoom = users[roomID].filter(id => id !== socket.id);

      socket.emit("all users", usersInThisRoom);
    });

    socket.on("sending signal", payload => {
      io.to(payload.userToSignal).emit('user joined', {signal: payload.signal, callerID: payload.callerID});
    });

    socket.on("returning signal", payload => {
      io.to(payload.callerID).emit('receiving returned signal', {signal: payload.signal, id: socket.id});
    });

    socket.on('close',(payload)=>{
      console.log(payload);
      const roomID = 1;
      let room = users[roomID];
      console.log(users)
      if (room) {
        room = room.filter(id => id !== payload.to);
        users[roomID] = room;
      }
      console.log(users)
    });


    socket.on('disconnect', () => {
      const roomID = socketToRoom[socket.id];
      let room = users[roomID];
      if (room) {
        room = room.filter(id => id !== socket.id);
        users[roomID] = room;
      }
    });
  })
}


module.exports = socketEvents;

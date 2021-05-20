const db = require('../../library/sequelize-cli/models');

const Groups = db.groups;
const Message = db.messages;
const User = db.user_details;
const Operator = db.Sequelize.Op;
const teamInfo = db.team_informations;


const socketEvents = (io) => {
  io.on('connection', (socket) => {
    console.log(`A user has connected! SocketId: ${socket.id}`);

    //
    // socket.on('join', (groupId) => {
    //   socket.join(groupId);
    // });
    //
    // socket.on('leave', (groupId) => {
    //   socket.leave(groupId);
    // });

    socket.on('disconnect', () => {
      console.log(`SocketId: ${socket.id} has disconnected!`);
    });

    // socket.on('join', ({ name, room }, callback) => {
    //   console.log(name);
    //   console.log(room);
    //   socket.join(room);
    //   callback();
    //
    // })

    socket.on('sendMessage', (message, callback) => {
      // const user = getUser(socket.id);
      socket.emit('message', { name: message.name, content: message.content,user_id: message.user_id });
      socket.broadcast.emit('message', { name: message.name, content: message.content,user_id: message.user_id });
      //to(user.room).
        User.findByPk(message.user_id)
          .then((foundUser) => {
              return Message.create(message)
          })
      callback();
    });
  //
  //   socket.on('newMessage', (newMessage) => {
  //     console.log("Emitting new message: "+newMessage.user_id)
  //     User.findByPk(newMessage.user_id)
  //         .then((foundUser) => {
  //           return Message.create(newMessage)
  //         })
  //         .then(()=>{
  //           setTimeout(()=>{
  //     Message.findAll({
  //       where: {
  //         group_id: newMessage.group_id,
  //       },
  //       include: [
  //         { model: User, attributes: ['user_name', 'profile_picture'] },
  //       ],
  //       order: [
  //         ['createdAt', 'ASC'],
  //       ],
  //     })
  //         .then((foundMessages) => {
  //           socket.emit('addMessage', foundMessages);
  //           socket.broadcast.emit('addMessage', foundMessages);
  //         })
  //         })
  //         },15000)
  //
  //   });
  //
  //   socket.on("messages", function(data) {
  //
  //     socket.emit("thread", data);
  //     socket.broadcast.emit("thread", data);
  //
  //   });
  //
  //   // On Typing...
  //   socket.on('is_typing', function(data) {
  //     if(data.status === true) {
  //       socket.emit("typing", data);
  //       socket.broadcast.emit('typing', data);
  //     } else {
  //       socket.emit("typing", data);
  //       socket.broadcast.emit('typing', data);
  //     }
  //   });
  //
  //Fetch Groups
    socket.on('fetchGroups',function (data){
        console.log("Fetching Groups")
      Groups.findAll(
          {
            where: {
              team_id: data.team_id
            }
          }
      )
          .then((foundGroups) => {
            socket.emit('foundGroups',foundGroups);
            // return foundGroups;
          })
          .catch((err)=>{
            console.log(err)
          });

    })
  //
    socket.on('fetchNew',function (data){
      // console.log(data);
      Message.findAll({
        where: {
          group_id: data,
        },
        include: [
          { model: User, attributes: ['user_name', 'profile_picture'] },
        ],
        order: [
          ['createdAt', 'ASC'],
        ],
      })
          .then((foundMessages) => {
            socket.emit('allMessages', foundMessages);
          })


    })

  });



};

module.exports = socketEvents;

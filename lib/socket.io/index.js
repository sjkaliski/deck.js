var USERS = require('../../users');

module.exports = function(io){

  io.sockets.on('connection', function(socket) {

    socket.on('identify', function(user_id, table_id) {
      USERS[socket.id] = {
        user_id: user_id,
        table_id: table_id
      };
      socket.join(table_id);
    });

    socket.on('disconnect', function() {
      if (USERS[socket.id]) {
        socket.leave(USERS[socket.id].table_id)
        delete USERS[socket.id];
      }
    })

  });

};

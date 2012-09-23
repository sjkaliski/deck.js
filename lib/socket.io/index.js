var io;

module.exports = function(_io){
  io = _io;

  io.on('connection', function(socket) {

    /**
     * User requests to join table, passes
     * user and table specific information.
     */
    socket.on('joinTable', function(data, callback) {
      socket.room = data.tableID;
      socket.join(socket.room);

      callback();
    });

  });
}
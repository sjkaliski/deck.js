define(['socketio'], function(io) {
  var socket = io.connect('http://localhost:3000');
  return socket;
});

const cartsController = require('./carts')

module.exports = (io) => {

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', function () {
      console.log('user disconnected');
    });

    socket.on('system_message', (action) => {
      console.log('system message', action)
    });

  })
}
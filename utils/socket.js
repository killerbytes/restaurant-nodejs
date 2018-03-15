var socketio;

module.exports = {
  initialize(io) {
    socketio = io
  },
  notify(message) {
    socketio.emit('server_message', message)
  }
}
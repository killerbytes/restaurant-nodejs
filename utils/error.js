module.exports = {
  response(status, message) {
    return {
      error: {
        status,
        message
      }
    }
  }

}
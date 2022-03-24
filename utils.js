const uuid = require('uuid').v1

module.exports = {
  generateId () {
    return uuid()
  }
}

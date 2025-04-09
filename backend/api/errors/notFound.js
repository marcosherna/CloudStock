const BaseError = require('./baseError');

module.exports = class NotFound extends BaseError {
  constructor(message) {
    super(message, 404);  
  }
}
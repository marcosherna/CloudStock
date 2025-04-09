const BaseError = require("./baseError");

module.exports = class Conflict extends BaseError {
  constructor(message) {
    super(message, 409)
  }
}
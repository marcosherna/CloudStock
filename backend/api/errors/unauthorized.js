const BaseError = require("./baseError");

module.exports = class Unauthorized extends BaseError {
    constructor(message) {
        super(message, 401);
    } 
}
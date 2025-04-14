const BaseError = require('./baseError');

module.exports = class BadRequest extends BaseError {
    constructor(message, errors = []) {
        super(message, 400, errors);
    }
}
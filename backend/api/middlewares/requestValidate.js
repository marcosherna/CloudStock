const { validationResult } = require("express-validator");
const BadRequest = require("@/errors/badRequest");

module.exports = function requestValidate(validations) {
  return async function (req, res, next) {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequest("Invalid request", errors.array());
    }

    next();
  };
};
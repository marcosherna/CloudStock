const BadRequest = require("@/errors/badRequest");

module.exports = function sanitizeSchema(schema) {
  return function (req, res, next) {
    const allowedFields = Object.keys(schema);
    Object.keys(req.body).forEach((key) => {
      if (!allowedFields.includes(key)) {
        throw new BadRequest(`Invalid field: ${key}`);
      }
    });
    next();
  };
};

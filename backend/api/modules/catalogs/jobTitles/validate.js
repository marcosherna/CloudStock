const { omitFields, makeOptional } = require("@/helpers/schemaUtils");
const { checkSchema, param } = require("express-validator");

const jobSchema = {
  id: {
    in: ["body"],
    exists: {
      errorMessage: "ID is required",
    },
    isInt: {
      errorMessage: "ID must be a positive integer",
    },
    toInt: true,
  },
  name: {
    in: ["body"],
    exists: {
      errorMessage: "Name is required",
    },
    isString: {
      errorMessage: "Name must be a string",
    },
    isLength: {
      options: { min: 1, max: 20 },
      errorMessage: "Name must be at most 15 characters long",
    },
    trim: true,
    escape: true,
  },
  description: {
    in: ["body"],
    optional: true,
    isString: {
      errorMessage: "Description must be a string",
    },
    trim: true,
    escape: true,
  },
  status: {
    in: ["body"],
    optional: true,
    isBoolean: {
      errorMessage: "Description must be a boolean",
    },
    toBoolean: true,
    isIn: {
      options: [[true, false]],
      errorMessage: "Status must be true or false",
    },
  },
};

const createSchema = omitFields(jobSchema, ["id"]);
const updateSchema = makeOptional(jobSchema, ["name"]);

module.exports = {
  Id: () =>
    param("id")
      .exists()
      .withMessage("ID is required")
      .isInt({ min: 1 })
      .withMessage("ID must be a positive integer")
      .toInt(),
  CreateJob: () => checkSchema(createSchema),
  UpdateJob: () => checkSchema(updateSchema),
  jobSchema,
  createSchema,
  updateSchema,
};

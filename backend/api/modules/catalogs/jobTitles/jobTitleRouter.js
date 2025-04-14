const { Router } = require("express");

const requestValidate = require("@/middlewares/requestValidate");
const sanitizeSchema = require("@/middlewares/sanitizeSchema");
const asyncHandler = require("@/handlers/asyncHandler");

const {
  Id,
  CreateJob,
  UpdateJob,
  createSchema,
  updateSchema,
} = require("./validate");

module.exports = function JobTitleRouter({ jobTitleController }) {
  const router = Router();
  const PATH = "/job-titles";

  router.get(PATH, asyncHandler(jobTitleController.findAll));
  router.get(
    `${PATH}/:id`,
    requestValidate([Id()]),
    asyncHandler(jobTitleController.findById)
  );
  router.post(
    PATH,
    requestValidate([CreateJob()]),
    sanitizeSchema(createSchema),
    asyncHandler(jobTitleController.create)
  );
  router.put(
    `${PATH}/:id`,
    requestValidate([Id(), UpdateJob()]),
    sanitizeSchema(updateSchema),
    asyncHandler(jobTitleController.update)
  );
  router.delete(
    `${PATH}/:id`,
    requestValidate([Id()]),
    asyncHandler(jobTitleController.delete)
  );

  return router;
};

const { Router } = require("express");
const asyncHandler = require("@/handlers/asyncHandler");
const requestValidate = require("@/middlewares/requestValidate");
const sanitizeSchema = require("@/middlewares/sanitizeSchema");

const {
  Id,
  CreateCategory,
  createSchema,
  updateSchema,
  UpdateCategory,
} = require("./validate");

module.exports = function CategoryRouter({ categoryController }) {
  const router = Router();
  const PATH = "/categories";

  router.get(`${PATH}`, asyncHandler(categoryController.findAll));
  router.get(
    `${PATH}/:id`,
    requestValidate([Id()]),
    asyncHandler(categoryController.findById)
  );

  router.post(
    `${PATH}`,
    requestValidate([CreateCategory()]),
    sanitizeSchema(createSchema),
    asyncHandler(categoryController.create)
  );
  router.put(
    `${PATH}/:id`,
    requestValidate([Id(), UpdateCategory()]),
    sanitizeSchema(updateSchema),
    asyncHandler(categoryController.update)
  );
  router.delete(
    `${PATH}/:id`,
    requestValidate([Id()]),
    asyncHandler(categoryController.delete)
  );

  return router;
};

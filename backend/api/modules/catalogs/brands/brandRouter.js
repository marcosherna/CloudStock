const { Router } = require("express");
const requestValidate = require("@/middlewares/requestValidate");
const sanitizeSchema = require("@/middlewares/sanitizeSchema");
const asyncHandler = require("@/handlers/asyncHandler");

const {
  Id,
  CreateBrand,
  UpdateBrand,
  createSchema,
  updateSchema,
} = require("./validate");

module.exports = function JobTitleRouter({ brandController }) {
  const router = Router();
  const PATH = "/brands";

  router.get(PATH, asyncHandler(brandController.findAll));
  router.get(
    `${PATH}/:id`,
    requestValidate([Id()]),
    asyncHandler(brandController.findById)
  );
  router.post(
    PATH,
    requestValidate([CreateBrand()]),
    sanitizeSchema(createSchema),
    asyncHandler(brandController.create)
  );
  router.put(
    `${PATH}/:id`,
    requestValidate([Id(), UpdateBrand()]),
    sanitizeSchema(updateSchema),
    asyncHandler(brandController.update)
  );
  router.delete(
    `${PATH}/:id`,
    requestValidate([Id()]),
    asyncHandler(brandController.delete)
  );

  return router;
};

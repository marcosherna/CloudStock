const { Router } = require('express')
const asyncHandler = require('@/handlers/asyncHandler')

module.exports = function CategoryRouter({ categoryController }) {
  const router = Router();
  const PATH = '/categories';

  router.get(`${PATH}`, asyncHandler(categoryController.findAll));
  router.get(`${PATH}/:id`, asyncHandler(categoryController.findById));

  router.post(`${PATH}`, asyncHandler(categoryController.create));
  router.put(`${PATH}/:id`, asyncHandler(categoryController.update));
  router.delete(`${PATH}/:id`, asyncHandler(categoryController.delete));

  return router;
}
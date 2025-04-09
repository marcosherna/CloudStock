const { Router } = require("express");
const asyncHandler = require("@/handlers/asyncHandler");

module.exports = function authRouter({ authController }) {
  const router = Router();
  const PATH = "/auth";

  router.get(`${PATH}/users`, asyncHandler(authController.findAll));
  router.post(`${PATH}/login`, asyncHandler(authController.logIn));
  router.post(`${PATH}/register`, asyncHandler(authController.register));
  router.post(`${PATH}/forgot-password`, asyncHandler(authController.forgotPassword));

  return router;
};

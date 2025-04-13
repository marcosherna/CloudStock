const { Router } = require("express");

module.exports = function apiRouter({ authRouter, catalogsRouter }) {
  const router = Router();
  const PATH = "/api";
  const API_VERSION = process.env.API_VERSION || "v1";

  // Add more routes as needed
  router.use(`${PATH}/${API_VERSION}`, authRouter);
  router.use(`${PATH}/${API_VERSION}`, catalogsRouter);

  return router;
};

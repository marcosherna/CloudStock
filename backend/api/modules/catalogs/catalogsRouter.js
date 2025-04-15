const { Router } = require("express");

module.exports = function CatalogsRouter({
  categoryRouter,
  jobTitleRouter,
  brandRouter,
}) {
  const router = Router();
  const PATH = "/catalogs";

  router.use(`${PATH}`, categoryRouter);
  router.use(`${PATH}`, jobTitleRouter);
  router.use(`${PATH}`, brandRouter);

  return router;
};

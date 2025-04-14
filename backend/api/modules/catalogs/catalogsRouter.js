const { Router } = require('express');

module.exports = function CatalogsRouter({ categoryRouter, jobTitleRouter }) {
    const router = Router();
    const PATH = '/catalogs';
 
    router.use(`${PATH}`, categoryRouter);
    router.use(`${PATH}`, jobTitleRouter);

    return router;
}
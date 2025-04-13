const { Router } = require('express');

module.exports = function CatalogsRouter({ categoryRouter}) {
    const router = Router();
    const PATH = '/catalogs';
 
    router.use(`${PATH}`, categoryRouter);

    return router;
}
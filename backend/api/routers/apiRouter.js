const { Router } = require('express');

module.exports = function apiRouter() {
    const router = Router();
    const PATH = '/api';
    const API_VERSION = process.env.API_VERSION || 'v1';
    
    // Define your API routes here
    router.get(`${PATH}/${API_VERSION}/example`, (req, res) => {
        res.json({ message: 'Hello from the API!' });
    });
    // Add more routes as needed
    
    return router;
}
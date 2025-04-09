const express = require('express');
const errorHandler = require('./handlers/errorHandler');
const cors = require('cors');

module.exports = function Server({ apiRouter }) {  
    const api = express();  
    
    api.use(express.json());
    api.use(express.urlencoded({ extended: true }));

    api.use(cors({
        origin: '*', // Allow all origins
        methods: ['GET', 'POST', 'PUT', 'DELETE'], 
        // allowedHeaders: ['Content-Type', 'Authorization'], 
    }));

    api.use(express.static('public'));
    api.use(express.static('uploads')); 

    api.use(apiRouter); 
    
    api.use(errorHandler)
    return api;
}
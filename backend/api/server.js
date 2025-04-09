const express = require('express');
const errorHandler = require('./handlers/errorHandler');

module.exports = function Server({ apiRouter }) {  
    const api = express();  
    
    api.use(express.json());
    api.use(express.urlencoded({ extended: true }));
    api.use(express.static('public'));
    api.use(express.static('uploads')); 

    api.use(apiRouter); 
    
    api.use(errorHandler)
    return api;
}
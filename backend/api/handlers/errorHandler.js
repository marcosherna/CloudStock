const BaseError = require("../errors/baseError");

module.exports = function errorHandler(err, req, res, next) { 
    if (err) {

        // if(err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        //     return res.status(400).json({ message: "Invalid JSON payload" });
        // }
 
        const isKnownError = (err instanceof BaseError)
        const status = isKnownError && err.status ? err.status : 500;
        const message = isKnownError ? err.message : "Internal server error";
        const stackTrace = process.env.NODE_ENV === "production" ? null : err.stack;

        res.status(status).json({
            message,
            ...(isKnownError && err instanceof BaseError ? JSON.parse(JSON.stringify(err)) : {}),
            stack: stackTrace
        });
    }
    next();
}
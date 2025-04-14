module.exports = class BaseError extends Error { 
  constructor(message, statusCode, errors = []) {
    super(message); 
    this.statusCode = statusCode;  
    this.name = this.constructor.name; 
    this.isOperational = true; 
    this.errors = errors

    // Capture stack trace for debugging
    Error.captureStackTrace(this, this.constructor);
  }
};

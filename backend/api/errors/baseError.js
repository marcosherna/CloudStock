module.exports = class BaseError extends Error { 
  constructor(message, statusCode) {
    super(message); 
    this.statusCode = statusCode;  
    this.name = this.constructor.name; 
    this.isOperational = true; 

    // Capture stack trace for debugging
    Error.captureStackTrace(this, this.constructor);
  }
};

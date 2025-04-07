require('dotenv')
  .config(); // Load environment variables from .env file

module.exports = function StartUp({ server }) {

  return new Promise((resolve, reject) => {

    const PORT = process.env.PORT || 9000; 
    const HOST = process.env.HOST || 'localhost';
    const PROTOCOL = process.env.PROTOCOL || 'http';
    const URL = `${PROTOCOL}://${HOST}:${PORT}`;

    server.listen(PORT, () => {
      console.log(`Server is running on port ${URL}`);
      resolve();
    });
    
  });
};

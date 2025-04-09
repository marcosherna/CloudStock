require('module-alias/register')
const container = require('./api/container');

const appContainer  = container()
const startApp = appContainer.resolve('startUp')

startApp
    .catch((error) => {
        console.error('Error starting application:', error)
})
 

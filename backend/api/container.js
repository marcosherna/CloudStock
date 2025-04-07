const { createContainer, asFunction, Lifetime } = require('awilix');
const startUp = require('./startUp');

module.exports = function Container() {
  const container = createContainer(); 

  container.register({
    server:asFunction(require('./server')).singleton(),
    startUp :asFunction(startUp).singleton(),
  });

  container.loadModules([
    'api/routers/**/*.js',
    'api/modules/**/*.js',
  ], { resolverOptions: { lifetime: Lifetime.SINGLETON },});

  return container;
}
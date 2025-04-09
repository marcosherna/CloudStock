const { createContainer, asFunction, Lifetime, asValue } = require("awilix");
const startUp = require("./startUp");
const db = require("./database/models/index");

module.exports = function Container() {
  const container = createContainer();

  container.register({
    server: asFunction(require("./server")).singleton(),
    startUp: asFunction(startUp).singleton(),
    db: asValue(db),
  });

  container.loadModules(
    [
      "api/routers/**/*.js",
      "api/modules/**/*.js",
      "api/database/repositories/**/*.js",
    ],
    { resolverOptions: { lifetime: Lifetime.SINGLETON } }
  );

  return container;
};

const NotFound = require("../../errors/notFound");

module.exports = function AuthController({ authService }) {
  const controller = {};

  controller.findAll = async (req, res) => {
    const users = await authService.findAll();
    return res.status(200).json(users);
  };

  controller.logIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await authService.logIn(email, password);
    return res.status(200).json(user.toJSON());
  };

  controller.register = async (req, res) => {
    const { username, avatar, email, password } = req.body;
    const user = await authService.register({
      username,
      avatar,
      email,
      password,
    });
    return res.status(201).json(user.toJSON());
  };

  return controller;
};

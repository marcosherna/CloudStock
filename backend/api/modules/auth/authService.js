const NotFound = require("../../errors/notFound");
const Unauthorized = require("../../errors/unauthorized");
const Conflict = require("../../errors/conflict");

module.exports = function AuthService({ userRepository }) {
  const service = {};

  service.findAll = async () => {
    return await userRepository.findAll();
  };

  service.logIn = async (email, password) => {
    const user = await userRepository.findByEmail(email);

    if (!user) throw new NotFound("User not found");
    if (user.password !== password) throw new Unauthorized("Invalid password");

    return user;
  };

  service.register = async (user) => {
    const { username, avatar, email, password } = user;

    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) throw new Conflict("User already exists");

    const newUser = await userRepository.create({
      username,
      img_user: avatar,
      email,
      password,
    });

    return newUser;
  };

  return service;
};

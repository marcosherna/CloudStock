const NotFound = require("../../errors/notFound");
const Unauthorized = require("../../errors/unauthorized");
const Conflict = require("../../errors/conflict");

const { hashPassword, comparePassword } = require("../../libs/bcrypt");

module.exports = function AuthService({ userRepository }) {
  const service = {};

  service.findAll = async () => {
    return await userRepository.findAll();
  };

  service.logIn = async (email, password) => {
    const user = await userRepository.findByEmail(email);

    if (!user) throw new NotFound("User not found");

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) throw new Unauthorized("Invalid password"); 

    return user;
  };

  service.register = async (user) => {
    const { username, avatar, email, password } = user;

    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) throw new Conflict("User already exists");

    const hashedPassword = await hashPassword(password); 

    const newUser = await userRepository.create({
      username,
      img_user: avatar,
      email,
      password: hashedPassword,
    });

    return newUser;
  };

  return service;
};

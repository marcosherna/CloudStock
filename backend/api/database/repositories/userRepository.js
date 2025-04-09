module.exports = function UserRepository({ db }) {
  const { User } = db;
  const repository = {};

  repository.findAll = async () => {
    return await User.findAll();
  };

  repository.findByEmail = async (email) => {
    return await User.findOne({ where: { email } });
  };

  repository.create = async (userData) => {
    const user = await User.create(userData);
    return user
  }
  
  repository.update = async (userId, userData) => {
    return await User.update(userData, { where: { id: userId } });
  };

  return repository;
};

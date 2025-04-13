const { fn, col, where } = require("sequelize");

module.exports = function CategoryRepository({ db }) {
  const { Category } = db;
  const repository = Category;

  repository.isExist = async (name) => {
    const category = await Category.findOne({
      where: where(fn("LOWER", col("name")), name.toLowerCase()),
    });
    return !!category;
  };

  return repository;
};
